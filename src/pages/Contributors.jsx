import { useState } from "react";
import { Link } from "react-router-dom";
import ContributorCard from "../components/ui/ContributorCard";
import contributors from "../data/contributors.json";

/**
 * Contributors page displays all project contributors in a searchable grid.
 * Data is loaded from the static JSON file.
 */
export default function Contributors() {
  const [search, setSearch] = useState("");

  const filtered = contributors.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Our Contributors
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Thank you to everyone who has contributed to FREE&OPEN.
        </p>
      </div>

      {/* Search input */}
      <div className="max-w-md mx-auto mb-8">
        <label htmlFor="contributor-search" className="sr-only">
          Search contributors
        </label>
        <input
          id="contributor-search"
          type="text"
          placeholder="Search contributors by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300
                     dark:border-gray-600 bg-white dark:bg-gray-800
                     text-gray-900 dark:text-gray-100
                     placeholder-gray-400 dark:placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-brand-teal
                     focus:border-transparent"
        />
      </div>

      {/* Contributors grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((c) => (
            <ContributorCard key={c.github} {...c} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-12">
          No contributors found matching &quot;{search}&quot;.
        </p>
      )}

      {/* Call to action banner */}
      <div
        className="text-center p-8 rounded-lg border-2 border-dashed
                   border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
      >
        <h2 className="text-xl font-semibold mb-2">
          Want to see your name here?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Contributing is easy. Add yourself to the contributors file and open a
          pull request.
        </p>
        <Link
          to="/contribute"
          className="inline-block px-6 py-2 bg-brand-coral hover:bg-brand-teal
                     text-white font-semibold rounded-lg transition-colors
                     focus:outline-none focus:ring-2 focus:ring-brand-teal"
        >
          Learn How to Contribute
        </Link>
      </div>
    </div>
  );
}
