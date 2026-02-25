---
title: "How many moves do you need to order chaos?"
date: 2026-02-26
layout: post
---

A 3×3 Rubik’s Cube has 43 quintillion possible scrambles, yet computers proved in 2010 that any of them can be solved in at most 20 moves—the famous God’s Number.
Most “human” rule-based sequential methods, by contrast, need 40+ moves on average.

Now swap the cube stickers for data, and swap your hands for a neural network.

Classifying N red points and N blue points of d coordinates using a neural ODE is like restoring the cube’s faces: each parameter switch corresponds to a new movement, and the objective is to group points of the same color into separate clusters.

A naïve, point-by-point strategy costs O(N) moves—analogous to the beginner’s cubing method.
Our proposed methodology classifies any configuration of points by clusters of size d, reducing the complexity to O(N / d) moves.
This result highlights the benefits of high dimensions in reducing the complexity required for data classification.

---

![Classification and Rubik's Cube analogy](/assets/images/cluster-cube.png)

Read the full article: [Cluster-based classification with neural ODEs via control](https://journal.global-sci.org/intro/online/read?online_id=2670)

Authors: Antonio Álvarez-López, Rafael Orive-Illera, Enrique Zuazua
Journal of Machine Learning, Vol. 4, Iss. 2, pp. 128–156, 2025.