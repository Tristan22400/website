# Personal Portfolio Website (Astro + Tailwind + Playwright)

## 1. Project Overview & Context

This repository hosts the professional portfolio website for **Tristan Martin**, a MSc student in Mathematics, Vision, and Learning (MVA) at ENS Paris-Saclay.

### Core Technologies

- **Astro**: Static Site Generation (SSG) for zero-JavaScript runtime performance by default.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling.
- **Playwright**: End-to-End (E2E) testing framework to ensure site reliability.
- **GitHub Actions**: CI/CD pipeline for automated testing and deployment to GitHub Pages.
- **Conda**: Strict environment management for reproducibility.

---

## 2. Environment Setup (Strict Rules)

**WARNING FOR AI AGENTS & DEVELOPERS:**

> Do not use global `npm` or `Node` installations. All `npm` commands must be executed within the activated Conda environment to ensure dependency consistency.

### Prerequisite

Ensure [Miniconda](https://docs.conda.io/en/latest/miniconda.html) or [Anaconda](https://www.anaconda.com/) is installed.

### Initialization

1.  **Create the environment** using the provided `environment.yml` file:

    ```bash
    conda env create -f environment.yml
    ```

2.  **Activate the environment**:

    ```bash
    conda activate personal-website
    ```

3.  **Update the environment** (if `environment.yml` changes):
    ```bash
    conda env update -f environment.yml --prune
    ```

---

## 3. Project Architecture & File Tree

This project follows a canonical Astro structure with strict separation of concerns.

```text
/
├── .github/workflows/   # GitHub Actions CI/CD configuration
│   └── deploy.yml       # Deploys to GitHub Pages on push to main
├── public/              # Static assets (fonts, icons, unoptimized images)
├── src/
│   ├── assets/          # Optimal images processed by Astro (e.g., profile.jpg)
│   ├── components/      # Reusable UI components (Typed via Props)
│   │   ├── Experience.astro   # Timeline component
│   │   ├── FilterButton.astro # Interactive filter button
│   │   ├── Footer.astro       # Global footer
│   │   ├── Navbar.astro       # Global navigation
│   │   ├── ProjectCard.astro  # Project display card
│   │   └── PublicationItem.astro # Publication display item
│   ├── content/         # Data layer (Markdown + Zod schemas)
│   │   ├── config.ts          # Zod schema definitions
│   │   ├── projects/          # Project markdown files
│   │   └── publications/      # Publication markdown files
│   ├── layouts/         # Global HTML shells
│   │   └── Layout.astro       # Base layout (Head, Meta, Global Styles)
│   ├── pages/           # File-based routing
│   │   ├── index.astro        # Home page
│   │   ├── projects.astro     # Projects filterable list
│   │   ├── publications.astro # Publications filterable list
│   │   ├── contact.astro      # Contact page
│   │   └── 404.astro          # Custom Error page
│   └── styles/
│       └── global.css   # Tailwind directives & custom generic styles
├── tests/               # Playwright E2E test suites
│   └── e2e.spec.ts      # Comprehensive navigation & functionality tests
├── astro.config.mjs     # Astro configuration
├── environment.yml      # Conda environment definition
├── package.json         # NPM scripts and dependencies
├── playwright.config.ts # Playwright configuration
└── tailwind.config.mjs  # Tailwind configuration
```

---

## 4. Content Management Protocol

### Adding Content

This site uses **Astro Content Collections**. Data is stored in Markdown files within `src/content/`.

#### Projects (`src/content/projects/*.md`)

Create a new Markdown file. The frontmatter must strictly adhere to this Zod schema:

```yaml
---
title: "Project Title"
description: "A concise description of the project."
technologies: ["Python", "PyTorch", "Astro"] # Array of strings
year: 2024 # Integer
link: "https://..." # Optional: External link
image: "/path/to/img" # Optional: Image path
---
Main content body (optional, currently unused in card view but available).
```

#### Publications (`src/content/publications/*.md`)

Create a new Markdown file. The frontmatter must strictly adhere to this Zod schema:

```yaml
---
title: "Paper Title"
authors: ["T. Martin", "Co-author"]
year: 2024
type: "conference" # Enum: 'conference', 'journal', 'workshop', 'thesis', 'other'
conference: "NeurIPS" # Optional (or use journal)
link: "https://..." # Optional
---
```

### CV Routing

The CV link is **external** and maintained in `src/components/Navbar.astro`.

- To update the CV, change the `href` in the `links` array in `Navbar.astro`.
- Do **not** upload a PDF to the repo unless explicitly requested; currently, it points to a Google Drive file.

---

## 5. Available Commands

Run these commands inside the Conda environment.

### Development

Start the local development server at `http://localhost:4321`:

```bash
conda run -n personal-website npm run dev
```

### Testing

Run the Playwright End-to-End test suite:

```bash
conda run -n personal-website npx playwright test
```

### Production Build

Build the static site into the `dist/` directory:

```bash
conda run -n personal-website npm run build
```

---

## 6. CI/CD & Deployment Workflow

### Deployment Strategy

Deployment is fully automated via **GitHub Actions** using the `.github/workflows/deploy.yml` workflow.

- **Trigger**: Pushing to the `main` branch.
- **Process**:
  1.  Sets up Miniforge (Conda).
  2.  Installs dependencies.
  3.  Runs Playwright tests. **(Deployment halts if tests fail)**.
  4.  Builds the Astro site.
  5.  Deploys the `dist/` artifact to GitHub Pages.

### Critical Warnings

- **Do not** manually build and push the `dist/` folder to a `gh-pages` branch. The action handles this.
- Ensure **GitHub Pages** source is set to **GitHub Actions** in the repository settings.
