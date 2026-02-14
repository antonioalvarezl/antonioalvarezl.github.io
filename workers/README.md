# Contact CAPTCHA Backend (Cloudflare Worker)

This worker verifies Cloudflare Turnstile and returns the real contact email only after a valid challenge.

## 1) Create Turnstile keys

- In Cloudflare Turnstile, create a widget for your site domain.
- Keep:
  - `site key` for frontend (`_config.yml`)
  - `secret key` for worker secret

## 2) Deploy worker

Use `workers/turnstile-email-gate.js` with Cloudflare Workers.

Set these worker variables/secrets:

- `TURNSTILE_SECRET_KEY` (secret)
- `CONTACT_EMAIL` (secret recommended)
- `ALLOWED_ORIGIN` (example: `https://antonioalvarezl.github.io`)

## 3) Configure the website

In `_config.yml`, set:

```yml
contact_gate:
  turnstile_site_key: "YOUR_TURNSTILE_SITE_KEY"
  reveal_endpoint: "https://YOUR-WORKER-DOMAIN/workers/contact-email"
```

After deploying, rebuild and publish the site.
