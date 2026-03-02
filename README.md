# FREE&OPEN

An open-source project designed to help newcomers learn how to contribute to open-source projects. Whether you are a student, a self-taught developer, or someone curious about open source, this is the place to start.

## Tech Stack

- **React 18** -- component-based UI
- **Vite** -- fast build tool and dev server
- **Tailwind CSS** -- utility-first styling with dark mode support
- **React Router** -- client-side routing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/mukuvi/FREE-OPEN.git

# Navigate into the project
cd FREE-OPEN

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

## Project Structure

```
src/
  assets/images/      -- SVG icons and image assets
  components/
    layout/           -- Navbar, Footer, Layout wrapper
    ui/               -- Reusable UI components (cards, buttons, steps)
  context/            -- React context providers (theme)
  data/               -- Static data files (contributors.json)
  hooks/              -- Custom React hooks
  pages/              -- Route page components
  App.jsx             -- Route definitions
  main.jsx            -- Application entry point
  index.css           -- Tailwind CSS directives
```

## How to Add Yourself as a Contributor

1. Fork this repository
2. Clone your fork: `git clone https://github.com/<YOUR-USERNAME>/FREE-OPEN.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b add-your-name`
5. Open `src/data/contributors.json` and add your entry at the end of the array:

```json
{
  "name": "Your Full Name",
  "github": "your-github-username",
  "linkedin": "your-linkedin-slug",
  "twitter": "your-twitter-handle"
}
```

6. Run `npm run dev` and verify your card appears at `/contributors`
7. Commit and push: `git add . && git commit -m "Add your-name to contributors" && git push origin add-your-name`
8. Open a pull request on the original repository

Once your PR is merged, your card will appear on the live site automatically.

## Other Ways to Contribute

- [Suggest a Feature](https://github.com/jmngandu/FREE-OPEN/issues/new?template=feature_request.md)
- [Report a Bug](https://github.com/jmngandu/FREE-OPEN/issues/new?template=bug_report.md)
- [Submit an Improvement](https://github.com/jmngandu/FREE-OPEN/issues/new?template=changes-you-recommend.md)

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Please read it before participating.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
