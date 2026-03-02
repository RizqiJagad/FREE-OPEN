import HowToStep from "../components/ui/HowToStep";

/** The JSON format contributors should follow when adding themselves. */
const JSON_EXAMPLE = `{
  "name": "Your Full Name",
  "github": "your-github-username",
  "linkedin": "your-linkedin-slug",
  "twitter": "your-twitter-handle"
}`;

/** Steps for contributing to the project. */
const STEPS = [
  {
    title: "Fork the Repository",
    description:
      "Click the 'Fork' button on the GitHub repository page to create your own copy.",
    code: null,
  },
  {
    title: "Clone Your Fork",
    description: "Clone the forked repository to your local machine.",
    code: "git clone https://github.com/<YOUR-USERNAME>/FREE-OPEN.git",
  },
  {
    title: "Install Dependencies",
    description:
      "Navigate into the project directory and install the required packages.",
    code: "cd FREE-OPEN && npm install",
  },
  {
    title: "Create a New Branch",
    description: "Create a branch for your changes with a descriptive name.",
    code: "git checkout -b add-your-name",
  },
  {
    title: "Add Yourself to Contributors",
    description:
      "Open src/data/contributors.json and add a new entry at the end of the array. Follow the format below.",
    code: JSON_EXAMPLE,
  },
  {
    title: "Commit and Push",
    description:
      "Stage your changes, write a clear commit message, and push to your fork.",
    code: 'git add . && git commit -m "Add <your-name> to contributors" && git push origin add-your-name',
  },
  {
    title: "Open a Pull Request",
    description:
      "Go to the original repository on GitHub and click 'New Pull Request'. Fill out the PR template and submit. Once reviewed and merged, your card will appear on the Contributors page automatically.",
    code: null,
  },
];

/** The GitHub repository base URL for issue template links. */
const REPO_URL = "https://github.com/jmngandu/FREE-OPEN";

/**
 * Contribute page provides a step-by-step guide for new contributors
 * and links to issue templates for feature requests, bug reports, etc.
 */
export default function Contribute() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          How to Contribute
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Follow these steps to make your first open-source contribution.
        </p>
      </div>

      {/* Step-by-step guide */}
      <div className="flex flex-col gap-4 mb-16">
        {STEPS.map((step, i) => (
          <HowToStep
            key={i}
            number={i + 1}
            title={step.title}
            description={step.description}
            code={step.code}
          />
        ))}
      </div>

      {/* Other ways to contribute */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-2">
          Other Ways to Contribute
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          You do not need to write code to contribute. Use the links below to
          share your ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href={`${REPO_URL}/issues/new?template=feature_request.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700
                       bg-white dark:bg-gray-800 hover:shadow-md transition-shadow
                       text-center"
          >
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              Suggest a Feature
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Have an idea to improve the project? Let us know.
            </p>
          </a>

          <a
            href={`${REPO_URL}/issues/new?template=bug_report.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700
                       bg-white dark:bg-gray-800 hover:shadow-md transition-shadow
                       text-center"
          >
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              Report a Bug
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Found something broken? Help us fix it by reporting the issue.
            </p>
          </a>

          <a
            href={`${REPO_URL}/issues/new?template=changes-you-recommend.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700
                       bg-white dark:bg-gray-800 hover:shadow-md transition-shadow
                       text-center"
          >
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              Submit an Improvement
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Have a suggestion for better code, docs, or design? Share it with
              us.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
