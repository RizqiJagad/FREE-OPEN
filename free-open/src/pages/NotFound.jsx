import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-brand-coral hover:bg-brand-teal
                   text-white font-semibold rounded-lg transition-colors
                   focus:outline-none focus:ring-2 focus:ring-brand-teal"
      >
        Back to Home
      </Link>
    </div>
  );
}
