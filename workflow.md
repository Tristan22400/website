# Development Workflow Roadmap

Please execute the build process in the following sequential phases. Do not move to the next phase until the current one is complete and verified.

**Phase 1: Setup & Scaffolding**

- Initialize the project repository (using Astro or chosen stack).
- Set up the CSS environment (Tailwind or Vanilla CSS structure).
- Create the global layout template (Navbar, Main Content Area, Footer).

**Phase 2: Content Architecture (Data Layer)**

- Set up the data structure for Projects and Publications.
- If using Astro, set up content collections using Markdown (`.md`) files so content is separated from logic.

**Phase 3: Testing Environment**

- Install and configure Playwright.
- Write the E2E test suite covering navigation, asset loading, mobile responsiveness, and filtering logic.
- Run tests locally to verify they pass.

**Phase 4: CI/CD & Deployment Setup**

- Write the GitHub Actions workflow file for deployment.
- Ensure the workflow is configured to run tests _before_ deploying to the `github-pages` environment.

**Phase 5: Page Implementation**

- Build the Home (Presentation) page.
- Build the CV page.
- Build the Projects and Publications pages, ensuring the filtering logic is fully functional.
- Build the Contact and 404 pages.
