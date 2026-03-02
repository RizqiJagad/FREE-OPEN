/**
 * Footer renders the site footer with FAQ, contact, and GitHub links
 * plus a copyright notice.
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Links row */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
          <a
            href="https://opensource.guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-brand-teal
                       dark:hover:text-brand-teal transition-colors"
          >
            FAQs
          </a>
          <a
            href="mailto:jamesmngandu@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-brand-teal
                       dark:hover:text-brand-teal transition-colors"
          >
            Contact
          </a>
          <a
            href="https://github.com/jmngandu/FREE-OPEN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-brand-teal
                       dark:hover:text-brand-teal transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-500">
          Copyright 2024 FREE&OPEN | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
