---
layout: page
title: Talks & Posters
---

<style>
  .slides-carousel {
    position: relative;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-bottom: 24px;
    padding: 0 58px;
  }

  .slides-viewport {
    overflow: hidden;
    padding: 14px 0 18px;
  }

  .slides-track {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    align-items: flex-start;
    will-change: transform;
  }

  .slide-item {
    flex: 0 0 200px;
    width: 200px;
    text-align: center;
  }

  .slide-item .slide-preview {
    display: block;
    width: 100%;
  }

  .slide-caption {
    margin: 8px 0 0;
    font-size: 0.85em;
    font-weight: 600;
    line-height: 1.3;
  }

  .slides-carousel .slide-preview:hover .slide-frame,
  .slides-carousel .slide-preview:focus .slide-frame {
    transform: scale(1.08);
  }

  .slides-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 4;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .slides-arrow:hover,
  .slides-arrow:focus {
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.2);
  }

  .slides-arrow-left {
    left: 10px;
  }

  .slides-arrow-right {
    right: 10px;
  }

  .thesis-defense-list {
    max-width: 760px;
    margin: 0 auto 28px;
  }

  .thesis-defense-card {
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    .slides-carousel {
      padding: 0 46px;
    }

    .slide-item {
      flex-basis: 160px;
      width: 160px;
    }

    .slides-arrow {
      width: 34px;
      height: 34px;
      font-size: 22px;
    }

    .slides-arrow-left {
      left: 6px;
    }

    .slides-arrow-right {
      right: 6px;
    }
  }
</style>

<p class="page-note" style="text-align: center;">(Only the most recent version is provided)</p>

<div class="slides-carousel" data-slides-carousel>
  <button class="slides-arrow slides-arrow-left" type="button" aria-label="Previous slides">
    &#8249;
  </button>

  <div class="slides-viewport">
    <div class="slides-track">

      <div class="slide-item">
        <a class="slide-preview" style="--frame-ratio: 16 / 9;" href="/assets/slides/thesis.pdf">
          <div class="slide-frame" data-label="Thesis slides">
            <img src="/assets/images/slides/thesis.png" alt="Thesis slides preview" onerror="this.parentElement.classList.add('preview-missing'); this.remove();">
          </div>
        </a>
        <p class="slide-caption">(Thesis slides)</p>
      </div>

      <div class="slide-item">
        <a class="slide-preview" style="--frame-ratio: 16 / 9;" href="/assets/slides/TRANSFORMERS.pdf">
          <div class="slide-frame" data-label="TRANSFORMERS slides">
            <img src="/assets/images/slides/TRANSFORMERS.png" alt="TRANSFORMERS slides preview" onerror="this.parentElement.classList.add('preview-missing'); this.remove();">
          </div>
        </a>
      </div>

      <div class="slide-item">
        <a class="slide-preview" style="--frame-ratio: 16 / 9;" href="/assets/slides/ICSDS.pdf">
          <div class="slide-frame" data-label="ICSDS slides">
            <img src="/assets/images/slides/ICSDS.png" alt="ICSDS slides preview" onerror="this.parentElement.classList.add('preview-missing'); this.remove();">
          </div>
        </a>
      </div>

      <div class="slide-item">
        <a class="slide-preview" style="--frame-ratio: 16 / 9;" href="/assets/slides/NUS.pdf">
          <div class="slide-frame" data-label="NUS slides">
            <img src="/assets/images/slides/NUS.png" alt="NUS slides preview" onerror="this.parentElement.classList.add('preview-missing'); this.remove();">
          </div>
        </a>
      </div>

      <div class="slide-item">
        <a class="slide-preview" style="--frame-ratio: 16 / 9;" href="/assets/slides/BENASQUE.pdf">
          <div class="slide-frame" data-label="Benasque slides">
            <img src="/assets/images/slides/BENASQUE.png" alt="Benasque slides preview" onerror="this.parentElement.classList.add('preview-missing'); this.remove();">
          </div>
        </a>
      </div>

      <div class="slide-item">
        <a class="slide-preview" style="--frame-ratio: 16 / 9;" href="/assets/slides/BENASQUE2.pdf">
          <div class="slide-frame" data-label="Benasque 2 slides">
            <img src="/assets/images/slides/BENASQUE2.png" alt="Benasque 2 slides preview" onerror="this.parentElement.classList.add('preview-missing'); this.remove();">
          </div>
        </a>
      </div>

    </div>
  </div>

  <button class="slides-arrow slides-arrow-right" type="button" aria-label="Next slides">
    &#8250;
  </button>
</div>

<h3 class="section-title section-subtitle">Thesis Defense</h3>

<ul class="content-card-list thesis-defense-list">
  <li class="content-card talk-card thesis-defense-card">
    <span class="talk-date">1 Jul 2026</span>
    <strong class="talk-title">Deep Learning with Controlled Flows: Expressivity, Generalization and Generation</strong><br>
    <em>Universidad Autónoma de Madrid</em>, Madrid, Spain.
  </li>
</ul>

<div class="talks-grid">
  <section class="talks-column">
    <h3 class="section-title section-subtitle">Seminars</h3>

    <ul class="content-card-list">

      <li class="content-card talk-card">
        <span class="talk-date">18 June 2026</span>
        <strong class="talk-title">Perceptrons and Localization of Attention's Mean Field Landscape</strong><br>
        <em>Math Machine Learning seminar MPI MIS + UCLA</em>, University of California in Los Angeles.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">14 May 2026</span>
        <strong class="talk-title">Deep Learning with Controlled Flows: Expressivity, Generalization and Generation</strong><br>
        <em>Machine Learning Seminar</em>, Universidad Autónoma de Madrid.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">29 Sep 2025</span>
        <strong class="talk-title">Entropy-driven control of the continuity equation for normalizing flows</strong><br>
        <em>Machine Learning and Scientific Computing Seminar</em>, National University of Singapore.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">16 Sep 2025</span>
        <strong class="talk-title">Entropy-driven control of the continuity equation for normalizing flows</strong><br>
        <em>Nonlinear PDE Seminar</em>, Texas A&amp;M University.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">09 Jul 2025</span>
        <strong class="talk-title">New deep learning models and perspectives for continuous-time glucose monitoring</strong><br>
        <em>DeustoCCM Seminar</em>, University of Deusto, DeustoTech.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">2024–2025</span>
        <strong class="talk-title">Learning Rate — Machine Learning Series (4 sessions)</strong><br>
        <em>FAU-DCN Lecture Group</em>, Friedrich-Alexander-Universität Erlangen-Nürnberg.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">01 Apr 2024</span>
        <strong class="talk-title">Controllability of neural differential equations</strong><br>
        <em>Seminario Fontán de Matemáticas</em>, Universidade de Santiago de Compostela.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">22 Feb 2024</span>
        <strong class="talk-title">Stable Architectures for Deep Neural Networks</strong><br>
        <em>Mathematics for Deep Learning Reading Group</em>, Universities of Bath, Cambridge, and University College London.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">25 Jan 2024</span>
        <strong class="talk-title">Efficient classification and interpolation with neural ODEs</strong><br>
        <em>Mathematics Seminar</em>, School of Mathematics, Sichuan University.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">28 Feb 2023</span>
        <strong class="talk-title">Breaking the curse of dimensionality with Barron Spaces</strong><br>
        <em>Applied PDEs Seminar</em>, Applied Mathematics and Mathematical Physics Section, Imperial College London.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">14 Nov 2022</span>
        <strong class="talk-title">Breaking the curse of dimensionality with Barron Spaces</strong><br>
        <em>FAU-DCN Seminar</em>, Friedrich-Alexander-Universität Erlangen-Nürnberg.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">04 Apr 2021</span>
        <strong class="talk-title">Formation of singularities in the incompressible Euler fluid equations</strong><br>
        <em>Seminarios de Iniciación a la Investigación</em>, Universidade de Santiago de Compostela.
      </li>

    </ul>
  </section>

  <section class="talks-column">
    <h3 class="section-title section-subtitle">Conferences &amp; Workshops</h3>

    <ul class="content-card-list">

      <li class="content-card talk-card">
        <span class="talk-date">23 Jun 2026</span>
        <strong class="talk-title">Perceptrons and Localization of Attention's Mean Field Landscape</strong><br>
        <em>Machine Learning and PDEs Workshop</em>, FAU MoD, the Research Center for Mathematics of Data at Friedrich-Alexander-Universität Erlangen-Nürnberg, Germany.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">11 Jun 2026</span>
        <strong class="talk-title">Perceptrons and Localization of Attention's Mean Field Landscape</strong><br>
        <em>Control, PDEs and Machine Learning: Conference in honour of Enrique Zuazua's 65th birthday</em>, Universidad de Deusto, Bilbao.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">17 Dec 2025</span>
        <strong class="talk-title">Continuous-Time Learning of Probability Distributions via Neural ODEs with Applications in Continuous Glucose Monitoring Data</strong><br>
        <em>IMS International Conference on Statistics and Data Science (ICSDS)</em>, Seville.<br>
        <strong>Student Travel Award</strong>
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">27 Aug 2024</span>
        <strong class="talk-title">Cluster-based classification with neural ODEs via control</strong><br>
        <em>Conference X Partial Differential Equations, Optimal Design and Numerics</em>, Centro de Ciencias de Benasque Pedro Pascual, Spain.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">26 Aug 2024</span>
        <strong class="talk-title">Interplay between depth and width for interpolation in neural ODEs</strong><br>
        <em>Conference X Partial Differential Equations, Optimal Design and Numerics</em>, Centro de Ciencias de Benasque Pedro Pascual, Spain.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">21 Jun 2024</span>
        <strong class="talk-title">Controllability of neural ODEs for data classification</strong><br>
        <em>21st French-German-Spanish Conference on Optimization</em>, Universidad de Oviedo, Spain.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">14 Nov 2023</span>
        <strong class="talk-title">Neural ODEs and data classification</strong><br>
        <em>V BYMAT Conference</em>, ICMAT, Madrid.
      </li>

      <li class="content-card talk-card">
        <span class="talk-date">01 Mar 2023</span>
        <strong class="talk-title">On the separability of two finite sets of random points using hyperplanes</strong><br>
        <em>Mini-workshop between Technische Universität München (Applied Numerical Analysis group) and FAU-DCN</em>.
      </li>

    </ul>
  </section>
</div>

<h3 class="section-title section-subtitle">Poster Presentations</h3>

<div class="slides-strip">

  <a class="slide-preview poster" style="--frame-ratio: 16 / 9;" href="/assets/posters/SHANGHAI.pdf">
    <div class="slide-frame" data-label="Shanghai poster">
      <img src="/assets/images/slides/SHANGHAI-poster.png" alt="Shanghai poster preview" onerror="this.parentElement.classList.add('preview-missing'); this.remove();">
    </div>
  </a>

  <a class="slide-preview poster" style="--frame-ratio: 16 / 9;" href="/assets/posters/ICML.pdf">
    <div class="slide-frame" data-label="ICML poster">
      <img src="/assets/images/slides/ICML-poster.png" alt="ICML poster preview" onerror="this.parentElement.classList.add('preview-missing'); this.remove();">
    </div>
  </a>

</div>

<ul class="content-card-list">

  <li class="content-card talk-card">
    <span class="talk-date">9 Jul 2026</span>
    <strong class="talk-title">Perceptrons and Localization of Attention's Mean-field Landscape</strong><br>
    <em>International Conference on Machine Learning (ICML 2026)</em>, Seoul, South Korea.<br>
    <strong>Spotlight paper</strong>
  </li>

  <li class="content-card talk-card">
    <span class="talk-date">07 Oct 2024</span>
    <strong class="talk-title">Controllability of Neural ODEs for Classification</strong><br>
    <em>2024 Conference on Control, Inversion and Numerics for PDEs</em>, Fudan University, Shanghai.
  </li>

  <li class="content-card talk-card">
    <span class="talk-date">10 Sep 2024</span>
    <strong class="talk-title">Simultaneous Control of Neural ODEs for Data Classification</strong><br>
    <em>Mathematical Aspects of Learning Theory — 20 years later</em>, Casa Convalescència, Barcelona.
  </li>

  <li class="content-card talk-card">
    <span class="talk-date">09 Jul 2024</span>
    <strong class="talk-title">Simultaneous Control of Neural ODEs for Data Classification</strong><br>
    <em>Fourth Symposium on Machine Learning and Dynamical Systems</em>, Fields Institute, Toronto.
  </li>

  <li class="content-card talk-card">
    <span class="talk-date">12 Jun 2024</span>
    <strong class="talk-title">Optimized Classification with Neural ODEs</strong><br>
    <em>Trends in Mathematical Sciences Conference</em>, Friedrich-Alexander-Universität Erlangen-Nürnberg.
  </li>

  <li class="content-card talk-card">
    <span class="talk-date">25 Mar 2024</span>
    <strong class="talk-title">Optimized Classification with Neural ODEs</strong><br>
    <em>Dynamics, Data and Deep Learning Workshop</em>, Engineers' House, Bristol.<br>
    <strong>Best Poster Award</strong>
  </li>

  <li class="content-card talk-card">
    <span class="talk-date">11 Dec 2023</span>
    <strong class="talk-title">Optimized Classification with Neural ODEs</strong><br>
    <em>Mathematical Opportunities in Digital Twins Workshop</em>, George Mason University, Fairfax.
  </li>

</ul>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("[data-slides-carousel]");

  if (!carousel) {
    return;
  }

  const track = carousel.querySelector(".slides-track");
  const previousButton = carousel.querySelector(".slides-arrow-left");
  const nextButton = carousel.querySelector(".slides-arrow-right");

  let isMoving = false;

  function getStepSize() {
    const firstItem = track.firstElementChild;

    if (!firstItem) {
      return 0;
    }

    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;

    return firstItem.getBoundingClientRect().width + gap;
  }

  function moveNext() {
    if (isMoving || !track.firstElementChild) {
      return;
    }

    isMoving = true;

    const firstItem = track.firstElementChild;
    const step = getStepSize();

    track.style.transition = "transform 0.35s ease";
    track.style.transform = `translateX(-${step}px)`;

    track.addEventListener("transitionend", function handleNextEnd() {
      track.appendChild(firstItem);
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      isMoving = false;
    }, { once: true });
  }

  function movePrevious() {
    if (isMoving || !track.lastElementChild) {
      return;
    }

    isMoving = true;

    const lastItem = track.lastElementChild;
    const step = getStepSize();

    track.style.transition = "none";
    track.insertBefore(lastItem, track.firstElementChild);
    track.style.transform = `translateX(-${step}px)`;

    track.offsetHeight;

    track.style.transition = "transform 0.35s ease";
    track.style.transform = "translateX(0)";

    track.addEventListener("transitionend", function handlePreviousEnd() {
      isMoving = false;
    }, { once: true });
  }

  nextButton.addEventListener("click", moveNext);
  previousButton.addEventListener("click", movePrevious);
});
</script>

---
