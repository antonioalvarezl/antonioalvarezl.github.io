---
layout: base
title: Contact
---

<section class="contact-email-wrap">
  <div class="content-card contact-email-card">
    <p class="contact-email-label"><strong>Contact:</strong></p>
    <div class="contact-email-row">
      <a class="contact-email-link" href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
      <button class="btn contact-copy-btn" type="button" data-copy-text="{{ site.author.email }}" aria-label="Copy email address">Copy</button>
    </div>
    <p class="contact-copy-feedback" aria-live="polite" role="status"></p>
  </div>
</section>
