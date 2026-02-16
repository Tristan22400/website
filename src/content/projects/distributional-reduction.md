---
title: "Distributional Reduction: Unifying DR and Clustering via Gromov-Wasserstein"
description: "Unifying Dimensionality Reduction and Clustering via Gromov-Wasserstein Optimal Transport."
technologies:
  [
    "Optimal Transport",
    "Manifold Learning",
    "PyTorch",
    "Geometric Deep Learning",
    "Python",
  ]
year: 2026
link: "https://drive.google.com/file/d/1ZiUK6EieCvBX-qFugsKOy37D0EYuhLFq/view?usp=sharing"
image: "/assets/distributional-reduction.png" # Placeholder
---

### Overview

A reproduction and extension of the Distributional Reduction (DistR) framework, which unifies Dimensionality Reduction (DR) and Clustering into a single Optimal Transport problem. By leveraging the **Gromov-Wasserstein (GW)** discrepancy, the model aligns input data distributions with learned low-dimensional prototypes, recovering spectral methods and neighbor embeddings as special cases of a unified transport objective.

### Key Contributions & Research Extension

- **Framework Analysis:** Evaluated the dual role of the semi-relaxed Gromov-Wasserstein (srGW) formulation in enabling adaptive quantization and structural alignment.
- **Geometric Sensitivity Study:** Conducted a rigorous benchmarking across Euclidean (Gaussian), Heavy-tailed (Student-t), and Hyperbolic (Lorentz) geometries, identifying "crowding effects" and metric distortion in mismatched latent spaces.
- **Novel Extension — Adaptive Latent Geometry:** Proposed and implemented a learnable generalized Student-t affinity kernel. By optimizing the kernel's degree of freedom ($\alpha$), the model dynamically adapts the latent space's "effective curvature" to match the intrinsic topology of the data (e.g., hierarchical vs. flat manifolds).
- **Optimization Strategy:** Implemented a Block Coordinate Descent (BCD) scheme to solve the non-convex objective, utilizing low-rank factorizations to reduce complexity from $O(nN^2)$ to $O(N)$ for large-scale scalability.

### Project Links

- **Research Report:** [Download PDF](https://drive.google.com/file/d/1ZiUK6EieCvBX-qFugsKOy37D0EYuhLFq/view?usp=sharing)
- **Source Code:** [GitHub Repository](https://github.com/Tristan22400/Distributional-Reduction)
