---
title: "Learning Deep Representations for Graph Clustering"
description: "Unsupervised node clustering using Deep Generative Networks, extending the GraphEncoder framework with denoising and geometric regularization."
technologies: ["Deep Learning", "Graph Theory", "PyTorch", "Python"]
year: 2026
link: "https://drive.google.com/file/d/12bDWVpra9BtUCim49xkSd8F-CDPlPw1r/view?usp=sharing"
image: "/assets/graph-clustering.png" # Placeholder, user didn't provide image but schema might require it or it's optional
---

### Overview

Reproduced and extended the GRAPHENCODER framework (Tian et al., 2014) to solve unsupervised node clustering using Deep Generative Networks. The project bridges the gap between classical Spectral Clustering and deep non-linear embeddings, focusing on overcoming the $O(N^3)$ complexity and rigidity of eigenvalue decomposition.

### Technical Contributions

- **Denoising Extension (DGE):** Developed the "Denoising GraphEncoder," introducing a stochastic corruption process (Masking Noise) to the normalized similarity matrix $D^{-1}S$.
- **Geometric Regularization:** Leveraged the Manifold Hypothesis to ensure learned node embeddings capture global community structures, significantly improving Normalized Cut (NCut) objectives on low-separability graphs.
- **Optimization Analysis:** Conducted a rigorous mathematical analysis of optimization instabilities in joint Optimal Transport (OT) clustering, identifying Gradient Coupling and Mode Collapse pathologies in non-stationary cost landscapes.
- **Alternative Architectures:** Evaluated Gaussian Mixture Models (GMM) for ellipsoidal cluster boundaries and VQ-VAE for end-to-end discrete representation learning, achieving competitive NMI scores without decoupled K-Means steps.

### Impact & Performance

- **Comparative Benchmarking:** Benchmarked performance across real-world (Karate, Football, Email) and synthetic (LFR algorithm) datasets.
- **Scalability:** Demonstrated how autoencoder-based methods maintain manageable complexity for large-scale graphs through backpropagation compared to dense eigenvector computation.

### Project Links

- **Research Paper:** [Link to PDF](https://drive.google.com/file/d/12bDWVpra9BtUCim49xkSd8F-CDPlPw1r/view?usp=sharing)
- **Implementation (PyTorch):** [GitHub Repository](https://github.com/Tristan22400/Graph_clustering)
