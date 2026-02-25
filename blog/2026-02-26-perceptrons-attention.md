---
title: "Perceptrons and Localization of Attention's Mean-Field Landscape"
date: 2026-02-26
layout: post
---

Modeling self-attention—the core mechanism behind modern LLMs—as a gradient flow on the sphere is a beautiful and well-established theoretical simplification. However, the dynamics of what happens when you couple it with a multilayer perceptron to create a Transformer are much less known.

In our new paper with Borjan Geshkovski and Domènec Ruiz-Balet, we use this idealization to understand how tokens evolve through the layers of such a neural network.

We show that coupling attention with a perceptron causes any token distribution to eventually collapse into a singular measure. Essentially, token particles are interconnected by attention, while the perceptron acts as a set of magnets that dictate exactly where the tokens localize.

What makes this particularly interesting is that this occurs even in the energy-descent regime, even though the attention term induces a repulsive force on the tokens. Alongside, we have anti-concentration bounds that prevent tokens from completely collapsing into a single, massive cluster in this regime.

The two GIFs below represent the token evolution:
- Left/Right: gradient ascent/descent
- Blue/Pink: with/without perceptron

![Token evolution without perceptron](/assets/images/code/perceptrons-attention-left.gif)
![Token evolution with perceptron](/assets/images/code/perceptrons-attention-right.gif)

On a personal note, this project began during my stay at Sorbonne Université in May/June 2025. Paris has this unique academic climate that somehow seeps into your work. Looking back, this paper was actually shaped between Institut Henri Poincaré's library, a few flâneries around the Quartier latin, and the stimulating environment at Colegio de España.

Read the full article: [Perceptrons and localization of attention's mean-field landscape](https://www.arxiv.org/abs/2601.21366)

Experiments and code: [GitHub repository](https://github.com/antonioalvarezl/2026-MLP-Attention-Energy)

Authors: Antonio Álvarez-López, Borjan Geshkovski, Domènec Ruiz-Balet
ArXiv preprint, 2026.