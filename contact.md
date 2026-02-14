---
layout: base
title: Contact
ext-js:
  - "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
---

<section class="contact-email-wrap">
  <div
    class="content-card contact-email-card"
    data-contact-gate
    data-turnstile-sitekey="{{ site.contact_gate.turnstile_site_key }}"
    data-email-endpoint="{{ site.contact_gate.reveal_endpoint }}"
  >
    <p class="contact-email-label"><strong>Contact:</strong></p>
    <div class="contact-captcha-wrap" data-contact-captcha-wrap>
      <p class="contact-captcha-hint">Complete the CAPTCHA to reveal my email.</p>
      <div class="contact-captcha-widget" data-contact-turnstile></div>
    </div>
    <div class="contact-email-row contact-email-row-hidden" data-contact-email-row>
      <a class="contact-email-link" href="#" data-contact-email-link rel="noopener noreferrer"></a>
      <button class="btn contact-copy-btn" type="button" data-contact-copy-btn aria-label="Copy email address">Copy</button>
    </div>
    <p class="contact-copy-feedback" aria-live="polite" role="status"></p>
  </div>
</section>
