---
layout: base
title: Location
body-class: location-mode
---

{% assign erlangen_map_src = "https://www.google.com/maps?q=Technische+Fakultat+Friedrich-Alexander-Universitat+Erlangen-Nurnberg+Cauerstrasse+11+91058+Erlangen&z=17&hl=en&output=embed" %}
{% assign madrid_map_src = "https://www.google.com/maps?q=Departamento+de+Matematicas+Universidad+Autonoma+de+Madrid&z=17&hl=en&output=embed" %}
{% assign active_map_src = madrid_map_src %}

<section class="location-page">
  <div class="location-map-canvas" aria-hidden="true">
    <iframe
      src="{{ active_map_src }}"
      data-initial-src="{{ active_map_src }}"
      data-erlangen-src="{{ erlangen_map_src }}"
      data-madrid-src="{{ madrid_map_src }}"
      title="Map centered on Departamento de Matematicas, Universidad Autonoma de Madrid"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div class="location-address-card">
    <strong>Address:</strong> Office 213<br>
    Departamento de Matemáticas, Universidad Autónoma de Madrid<br>
    C/ Francisco Tomás y Valiente, 7 · 28049 · Madrid, Spain
  </div>

  <!--
  FAU option (kept for future switch):
  Office 03.362
  Department of Mathematics, Technische Fakultat
  Friedrich-Alexander-Universitat Erlangen-Nurnberg (FAU)
  Cauerstrasse 11 · 91058 · Erlangen, Germany
  -->
</section>
