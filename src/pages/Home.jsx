import { Link } from "react-router-dom";
import ContributorCard from "../components/ui/ContributorCard";
import contributors from "../data/contributors.json";


export default function Home() {
  // Show first 3 contributors as a featured preview
  const featured = contributors.slice(0, 3);

  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(240,128,128,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(32,178,170,0.15),transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            FREE&OPEN
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn open source by contributing to open source. A welcoming
            community for your first pull request.
          </p>
          <Link
            to="/contribute"
            className="inline-block px-8 py-3 bg-brand-coral hover:bg-brand-teal
                       text-white font-semibold rounded-lg transition-colors
                       focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2
                       focus:ring-offset-gray-900"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          What is FREE&OPEN?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-4">
          FREE&OPEN is an open-source project designed to help newcomers learn
          how to contribute to open-source projects. Whether you are a student,
          a self-taught developer, or someone curious about open source, this is
          the place to start.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
          By contributing here, you will learn Git, GitHub workflows, and
          collaborative development practices in a friendly, supportive
          environment.
        </p>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-coral
                           text-white flex items-center justify-center font-bold text-xl"
              >
                1
              </div>
              <h3 className="font-semibold mb-2">Fork and Clone</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fork the repository and clone it to your local machine.
              </p>
            </div>
            <div className="text-center p-6">
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-coral
                           text-white flex items-center justify-center font-bold text-xl"
              >
                2
              </div>
              <h3 className="font-semibold mb-2">Add Yourself</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Add your name and social links to the contributors file.
              </p>
            </div>
            <div className="text-center p-6">
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-coral
                           text-white flex items-center justify-center font-bold text-xl"
              >
                3
              </div>
              <h3 className="font-semibold mb-2">Open a PR</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Push your changes and open a pull request. Once merged, you
                appear on the contributors page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured contributors */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Featured Contributors
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Some of the people who have contributed to this project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((c) => (
            <ContributorCard key={c.github} {...c} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contributors"
            className="inline-block px-6 py-2 border-2 border-brand-coral
                       dark:border-brand-teal text-brand-coral dark:text-brand-teal
                       hover:bg-brand-coral hover:text-white dark:hover:bg-brand-teal
                       dark:hover:text-white font-semibold rounded-lg transition-colors
                       focus:outline-none focus:ring-2 focus:ring-brand-teal"
          >
            View All Contributors
          </Link>
        </div>
      </section>
    </>
  );
}
