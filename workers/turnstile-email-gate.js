/**
 * Cloudflare Worker: reveal contact email only after Turnstile validation.
 *
 * Required secrets/vars:
 * - TURNSTILE_SECRET_KEY (secret key from Cloudflare Turnstile)
 * - CONTACT_EMAIL        (real email that will be returned)
 * - ALLOWED_ORIGIN       (e.g. https://antonioalvarezl.github.io)
 */

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function corsHeaders(origin, allowedOrigin) {
  var normalizedOrigin = (origin || "").replace(/\/+$/, "");
  var normalizedAllowed = (allowedOrigin || "").replace(/\/+$/, "");
  const headers = { ...jsonHeaders };
  headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
  headers["Access-Control-Allow-Headers"] = "Content-Type";
  headers["Vary"] = "Origin";
  headers["Access-Control-Allow-Origin"] =
    normalizedOrigin && normalizedOrigin === normalizedAllowed ? normalizedAllowed : "null";
  return headers;
}

async function verifyTurnstile(token, ip, secret) {
  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip) {
    formData.append("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });

  return response.json();
}

export default {
  async fetch(request, env) {
    const origin = (request.headers.get("Origin") || "").trim().replace(/\/+$/, "");
    const allowedOrigin = (env.ALLOWED_ORIGIN || "").trim().replace(/\/+$/, "");
    const headers = corsHeaders(origin, allowedOrigin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
    }

    if (!allowedOrigin || origin !== allowedOrigin) {
      return new Response(JSON.stringify({ error: "Forbidden origin" }), { status: 403, headers });
    }

    if (!env.TURNSTILE_SECRET_KEY || !env.CONTACT_EMAIL) {
      return new Response(JSON.stringify({ error: "Server not configured" }), { status: 500, headers });
    }

    let token = "";
    try {
      const body = await request.json();
      token = (body.token || "").trim();
    } catch (err) {
      token = "";
    }

    if (!token) {
      return new Response(JSON.stringify({ error: "Missing token" }), { status: 400, headers });
    }

    const ip = request.headers.get("CF-Connecting-IP") || "";
    const verification = await verifyTurnstile(token, ip, env.TURNSTILE_SECRET_KEY);

    if (!verification.success) {
      return new Response(JSON.stringify({ error: "Captcha verification failed" }), { status: 403, headers });
    }

    // Extra hostname check hardens against token misuse across sites.
    try {
      const expectedHost = new URL(allowedOrigin).hostname;
      if (verification.hostname && verification.hostname !== expectedHost) {
        return new Response(JSON.stringify({ error: "Hostname mismatch" }), { status: 403, headers });
      }
    } catch (err) {
      return new Response(JSON.stringify({ error: "Invalid ALLOWED_ORIGIN" }), { status: 500, headers });
    }

    return new Response(JSON.stringify({ email: env.CONTACT_EMAIL }), { status: 200, headers });
  },
};
