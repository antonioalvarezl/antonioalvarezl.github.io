---
layout: page
title: Code
---

Here are some of my open-source projects and interactive demos. You can find more on my <a href="https://github.com/antonioalvarezl" target="_blank">GitHub profile</a>.

---

**ReLU Neural ODE Point Simulator**  
Interactive demo for exploring the evolution of point clouds under single-unit ReLU Neural ODEs. Includes free exploration, interpolation tracking, and classification modes with separability and cross-entropy metrics.  
[Live Demo](https://antonioalvarezl.github.io/relu-point-simulator/){: .btn}
[GitHub](https://github.com/antonioalvarezl/relu-point-simulator){: .btn}  
*Related papers:* Cluster-based classification with neural ODEs via control (Journal of Machine Learning, 2025) and Interplay between depth and width for interpolation in neural ODEs (Neural Networks, 2024)

**ReLU Flow Simulator**  
Interactive visualization tool to explore density evolution under piecewise-linear flows driven by a single ReLU unit. Features multi-step composition, supports 1D and 2D, and offers both population (analytical) and empirical (particle-based) views.  
[Live Demo](https://antonioalvarezl.github.io/relu-flow-simulator/){: .btn}
[GitHub](https://github.com/antonioalvarezl/relu-flow-simulator){: .btn}  
*Related paper:* Constructive approximate transport maps with normalizing flows (Applied Mathematics & Optimization, 2025)

---

## **Research Code**

**
Optimization of a time-dependent Gaussian Mixture Model (GMM) using a Maximum Mean Discrepancy (MMD)-based objective to fix global means and variances, and modeling the continuous evolution of the local mixing weights via Neural Ordinary Differential Equations (Neural ODEs); applications in continuous glucose monitoring.
[GitHub](https://github.com/antonioalvarezl/2025-EM_MMD)){: .btn}  

**Gaussian Mixture Optimization**  
Comparison framework for evaluating different loss functions (KL divergence, L1, L2) in gradient descent optimization. Supports flexible parameter optimization (means, variances, weights), multiple optimization methods (standard GD, alternating GD, Adam, stage-wise), and generates visualizations and animations of the optimization process.  
[GitHub](https://github.com/antonioalvarezl/2024-LossComparisonGD){: .btn}

**Neural ODE Classification Capacity**  
Complete implementation of the cluster-based classification approach with Neural ODEs from our paper. Includes synthetic and real-world dataset support (MNIST, CIFAR-10), multiple architectures (inside, outside, bottleneck), visualization tools, and trajectory animations.  
[GitHub](https://github.com/antonioalvarezl/2024-WCS-NODEs){: .btn}  
*Paper:* Cluster-based classification with neural ODEs via control (CMS, 2025)

---

## **Citing this work**

If you use any of these tools in your research or teaching, please cite the relevant papers mentioned above. Full citations are available in the [Publications](/publications) page.

---
