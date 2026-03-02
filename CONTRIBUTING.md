# Contributing to FREE&OPEN

Thank you for your interest in contributing to FREE&OPEN! This guide will help you get started.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A GitHub account
- Basic knowledge of Git (or a willingness to learn)

## Setup

1. **Fork** the repository by clicking the "Fork" button on the [GitHub repo page](https://github.com/jmngandu/FREE-OPEN).

2. **Clone** your fork:
   ```bash
   git clone https://github.com/<YOUR-USERNAME>/FREE-OPEN.git
   cd FREE-OPEN
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the dev server**:
   ```bash
   npm run dev
   ```
   The site runs at `http://localhost:5173`.

## Adding Yourself as a Contributor

This is the simplest way to make your first contribution:

1. Create a new branch:
   ```bash
   git checkout -b add-your-name
   ```

2. Open `src/data/contributors.json` and add a new entry at the end of the JSON array:
   ```json
   {
     "name": "Your Full Name",
     "github": "your-github-username",
     "linkedin": "your-linkedin-slug",
     "twitter": "your-twitter-handle"
   }
   ```
   - `name` and `github` are required
   - `linkedin` and `twitter` are optional (use `""` if you do not have them)

3. Verify your card appears at `http://localhost:5173/contributors`.

4. Commit and push:
   ```bash
   git add .
   git commit -m "Add your-name to contributors"
   git push origin add-your-name
   ```

5. Go to the original repository and click **"New Pull Request"**. Fill out the PR template and submit.

## Contributing Code

For feature changes, bug fixes, or improvements to the site itself:

1. Create a descriptive branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the existing code patterns
3. Test locally with `npm run dev`
4. Verify the build succeeds: `npm run build`
5. Commit with a clear message describing what you changed and why
6. Push and open a pull request

## Project Structure

```
src/
  components/layout/   -- Navbar, Footer, Layout (shared page structure)
  components/ui/       -- Reusable UI components
  context/             -- React context (theme provider)
  data/                -- Static data (contributors.json)
  hooks/               -- Custom hooks (useTheme)
  pages/               -- Route pages (Home, Contributors, Contribute, NotFound)
```

## Code Style

- Use functional components with hooks
- Use Tailwind CSS utility classes for styling
- Use `dark:` variants for dark mode support
- Keep components small and focused on a single responsibility

## Reporting Issues

Use the GitHub issue templates to:
- [Suggest a feature](https://github.com/jmngandu/FREE-OPEN/issues/new?template=feature_request.md)
- [Report a bug](https://github.com/jmngandu/FREE-OPEN/issues/new?template=bug_report.md)
- [Recommend changes](https://github.com/jmngandu/FREE-OPEN/issues/new?template=changes-you-recommend.md)

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We are committed to providing a welcoming and inclusive experience for everyone.
