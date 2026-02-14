# Professional AI Researcher Portfolio

This is the source code for the personal portfolio website of **Tristan Martin**, an MSc Student in Mathematics, Vision, and Learning (MVA). The site is designed to showcase research projects, publications, and professional experience to Big Tech recruiters and research labs.

## 1. Project Overview & Tech Stack

This project is built with a focus on **performance, reproducibility, and rigorous testing**.

- **Astro**: Static Site Generation (SSG) for lightning-fast load times.
- **Tailwind CSS**: Utility-first styling for a clean, "Big Tech" aesthetic.
- **Playwright**: End-to-End (E2E) testing for navigation, content validation, and mobile responsiveness.
- **GitHub Actions**: Automated CI/CD pipeline for building, testing, and deploying to GitHub Pages.

---

## 2. Environment Setup (Strict Rules)

> [!IMPORTANT]
> This project uses **Conda** for strict environment management.
> **DO NOT** use global `npm` or `node` installations. All commands must be run within the activated Conda environment.

### Initialization

To set up the environment for the first time:

```bash
# Create the environment from the lock file
conda env create -f environment.yml

# Activate the environment
conda activate personal-website
```

### Updating Dependencies

If you modify `environment.yml`, update your environment:

```bash
conda env update -f environment.yml --prune
```

---

## 3. Project Architecture

The project follows a standard Astro structure with strict separation of concerns:

```text
├── .github/workflows/    # CI/CD configuration (deploy.yml)
├── public/               # Static assets (images, favicon, CV)
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Experience.astro  # Timeline component
│   │   ├── Navbar.astro      # Responsive navigation
│   │   └── Footer.astro      # Site footer
│   ├── content/          # Data layer (Markdown + Zod schemas)
│   │   ├── projects/         # Project markdown files
│   │   └── publications/     # Publication markdown files
│   ├── layouts/          # Global HTML shell (Layout.astro)
│   ├── pages/            # File-based routing
│   │   ├── index.astro       # Home page
│   │   ├── projects.astro    # Projects listing
│   │   ├── publications.astro# Publications listing
│   │   ├── contact.astro     # Contact page
│   │   └── 404.astro         # Custom error page
│   └── styles/           # Global CSS (Tailwind imports)
└── tests/                # Playwright E2E test suites
```

---

## 4. Content Management Protocol

### Adding Content

This project uses **Astro Content Collections**. To add new items, create Markdown files in `src/content/`.

#### Projects

Create a file in `src/content/projects/` (e.g., `new-project.md`).
**Required Frontmatter:**

```yaml
---
title: "Project Title"
description: "Brief description of the project."
technologies: ["Python", "PyTorch", "Astro"]
year: 2024
link: "https://github.com/..." # Optional
image: "/images/project.png" # Optional
---
```

#### Publications

Create a file in `src/content/publications/` (e.g., `paper.md`).
**Required Frontmatter:**

```yaml
---
title: "Paper Title"
authors: ["Tristan Martin", "Co-author 1"]
year: 2024
type: "conference" # Enum: 'conference', 'journal', 'workshop', 'thesis', 'other'
conference: "NeurIPS 2024" # Optional
link: "https://arxiv.org/..." # Optional
---
```

### CV Management

The CV link in the Navbar points to an external Google Drive URL. To update it:

1.  Open `src/components/Navbar.astro`.
2.  Locate the `links` array.
3.  Update the `href` for the 'CV' item.

---

## 5. Available Commands

All commands must be executed from the project root within the Conda environment.

| Command                                             | Description                                              |
| :-------------------------------------------------- | :------------------------------------------------------- |
| `conda run -n personal-website npm run dev`         | Starts the local development server at `localhost:4321`. |
| `conda run -n personal-website npx playwright test` | Runs the full suite of E2E tests (headless).             |
| `conda run -n personal-website npm run build`       | Builds the static site for production into `dist/`.      |

---

## 6. CI/CD & Deployment

Deployment is **fully automated** via GitHub Actions.

- **Workflow File**: `.github/workflows/deploy.yml`
- **Trigger**: Pushing to the `main` branch.
- **Process**:
  1.  Sets up Miniforge (Conda).
  2.  Installs dependencies.
  3.  Runs Playwright tests.
  4.  Builds the site.
  5.  Deploys to GitHub Pages.

> [!WARNING]
> **DO NOT** manually build and push the `dist/` folder to a `gh-pages` branch. Always push source code to `main` and let the CI/CD pipeline handle the deployment.
