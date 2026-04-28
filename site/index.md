---
layout: home

hero:
  name: "Software Verification in Lean"
  text: "2026"
  tagline: Advancing software correctness with Lean
  image:
    src: /images/Lean-banner.png
    alt: LEAN wordmark with verification robot illustration
---

::: warning Recordings
Recordings of the talks are now available on [this YouTube playlist](https://www.youtube.com/playlist?list=PLtlBXrgM1AlOg-jxchcgkLfTdwZWm-oN3). Due to technical problems, we were sadly not able to record Derek Sorensen's talk, but he kindly provided his slides — available below.

:::

## About

Software Verification in Lean is a one-day open workshop dedicated to the formal verification of software using the Lean 4 theorem prover. The workshop brings together researchers and practitioners to share recent advances, practical techniques, and ongoing challenges in building verified software. Whether you work in proof engineering, programming language theory, or software development, we invite you to join us for a day of talks and discussion.

## Schedule

<table>
<thead>
<tr><th>Time</th><th>Speaker</th><th>Title</th></tr>
</thead>
<tbody>
<tr><td>9:00–10:00</td><td><span class="speaker-with-slides"><a href="https://www.beneficialaifoundation.org/max" target="_blank" rel="noopener">Max Tegmark</a> and <a href="https://www.beneficialaifoundation.org/" target="_blank" rel="noopener">BAIF</a><br><a href="/SVIL2026/slides/MaxTegmark_BAIF_slides_SViL26.pdf" target="_blank" rel="noopener" class="slides-badge" title="Download slides (PDF)">&#128196; slides</a></span></td><td>Open tools and standards for scaling software verification</td></tr>
<tr><td>10:00–11:00</td><td><span class="speaker-with-slides"><a href="https://leodemoura.github.io/" target="_blank" rel="noopener">Leo de Moura</a><br><a href="https://leodemoura.github.io/static/svil26/" target="_blank" rel="noopener" class="slides-badge" title="View slides">&#128196; slides</a></span></td><td><details><summary>Scalable Software Verification in Lean 4</summary>Lean 4 is evolving from a theorem prover into a platform for scalable software verification. A key challenge is closing the performance gap between Lean's automation and the tools used in software verification (e.g., Aeneas, mvcgen, Velvet). In this talk, I present <code>SymM</code>, a new monadic framework designed for high-performance software verification tools built on top of Lean. <code>SymM</code> enforces a monotonically growing local context, enabling cheap definitional equality checks, optimized introduction and application tactics, and efficient rewriting—all while sharing infrastructure with <code>grind</code>, Lean's SMT-inspired tactic that combines E-matching, congruence closure, and theory solvers. I will demonstrate the new <code>sym =></code> interactive mode, which gives users explicit control over verification condition generation and discharge, and discuss how AI integration is reshaping how we approach verification at scale.</details></td></tr>
<tr class="break-row"><td>11:00–11:30</td><td colspan="2">Coffee break</td></tr>
<tr><td>11:30–12:30</td><td><a href="https://www.sonho.fr/" target="_blank" rel="noopener">Son Ho</a></td><td>Co-development of code and proofs for SymCrypt</td></tr>
<tr class="break-row"><td>12:30–14:00</td><td colspan="2">Lunch break</td></tr>
<tr><td>14:00–15:00</td><td><span class="speaker-with-slides"><a href="https://derekhsorensen.com/" target="_blank" rel="noopener">Derek Sorensen</a><br><a href="/SVIL2026/slides/Derek_slides_SViL26.pdf" target="_blank" rel="noopener" class="slides-badge" title="Download slides (PDF)">&#128196; slides</a></span></td><td><details><summary>Correct and Computable Specifications in Lean</summary>The efficacy of formal verification depends on high quality specifications which are both correct and complete. This talk will ask: What is an ideal specification? How do we evaluate and improve our specifications? And how can Lean help us achieve the highest-assurance software possible?</details></td></tr>
<tr class="break-row"><td>15:00–15:30</td><td colspan="2">Coffee break</td></tr>
<tr><td>15:30–16:30</td><td><a href="https://bhargavan.info/" target="_blank" rel="noopener">Karthikeyan Bhargavan</a></td><td><details><summary>Verifying Cryptographic Applications: Challenges and Opportunities</summary>At Cryspen, we are developing Hax, a toolchain for verifying Rust programs using a variety of backend provers. We have used Hax to verify post-quantum cryptographic libraries, and to analyze implementations of protocols like TLS 1.3 and SPQR for both functional and security properties. In this talk, I will identify the unique challenges in verifying this class of applications, and I will describe how we use tools like F*, ProVerif, and Lean to verify real-world security-critical software.</details></td></tr>
</tbody>
</table>

## Organizing Committee

<div class="organizer-list">
  <span>Ashley Blacquiere <em>(Lean FRO)</em> <EmailLink u="ashley" d="lean-fro.org" /></span>
  <span>Oliver Butterley <em>(BAIF)</em> <EmailLink u="oliver" d="beneficialaifoundation.org" /></span>
  <span>Alessandro D'Angelo <em>(BAIF)</em> <EmailLink u="alessandro" d="beneficialaifoundation.org" /></span>
  <span>Aymeric Fromherz <em>(INRIA)</em></span>
</div>

## Venue

<div class="venue-block">
  <span class="venue-name"><a href="https://www.inria.fr" target="_blank" rel="noopener">INRIA Paris</a></span><br>
  <span class="venue-address"><a href="https://maps.google.com/?q=48+rue+Barrault,+75013+Paris,+France">48 rue Barrault, 75013 Paris, France</a></span>
</div>

## Group photo

<figure class="group-photo">
  <img src="/SVIL2026/images/group-photo.jpg" alt="Group photo of SVIL2026 attendees at INRIA Paris" />
</figure>

<div class="partners-section organizers-section">

## Organized by

<PartnerLogos group="organizer" :size="64" />

</div>

<div class="partners-section">

## Partners

<PartnerLogos group="partner" />

</div>
