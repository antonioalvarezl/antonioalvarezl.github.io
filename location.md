---
layout: base
title: Location
body-class: location-mode
---

{% assign erlangen_map_src = "https://www.google.com/maps?q=Technische+Fakultat+Friedrich-Alexander-Universitat+Erlangen-Nurnberg+Cauerstrasse+11+91058+Erlangen&z=17&hl=en&output=embed" %}
{% assign madrid_map_src = "https://www.google.com/maps?q=Departamento+de+Matematicas+Universidad+Autonoma+de+Madrid&z=17&hl=en&output=embed" %}
{% assign active_map_src = erlangen_map_src %}

<section class="location-page">
  <div class="location-map-canvas" aria-hidden="true">
    <iframe
      src="{{ active_map_src }}"
      data-initial-src="{{ active_map_src }}"
      data-madrid-src="{{ madrid_map_src }}"
      title="Map centered on Technische Fakultat, Friedrich-Alexander-Universitat Erlangen-Nurnberg"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div class="location-address-card">
    <strong>Address:</strong> Office 03.362<br>
    Department of Mathematics, Technische Fakultat<br>
    Friedrich-Alexander-Universitat Erlangen-Nurnberg (FAU)<br>
    Cauerstrasse 11 · 91058 · Erlangen, Germany
  </div>

  <!--
  Madrid backup (keep for future switch):
  Office 213
  Departamento de Matematicas, Universidad Autonoma de Madrid
  C/ Francisco Tomas y Valiente, 7 · 28049 · Madrid, Spain
  -->
</section>
