import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import doorIcon from "../../assets/images/door-open-solid.svg";

/**
 * Navbar renders the site header with logo, navigation links, theme toggle,
 * and a responsive hamburger menu for mobile screens.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded transition-colors font-medium ${
      isActive
        ? "text-brand-coral dark:text-brand-teal"
        : "text-gray-700 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-teal"
    }`;

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <nav
        className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100"
        >
          <img
            src={doorIcon}
            alt=""
            className="w-5 h-5 dark:invert dark:brightness-200"
            aria-hidden="true"
          />
          FREE&OPEN
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/contributors" className={linkClass}>
            Contributors
          </NavLink>
          <NavLink to="/contribute" className={linkClass}>
            Contribute
          </NavLink>
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300
                       hover:bg-gray-100 dark:hover:bg-gray-700 rounded
                       focus:outline-none focus:ring-2 focus:ring-brand-teal"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Hamburger / close icon using simple SVG lines */}
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-200 dark:border-gray-700
                     bg-white dark:bg-gray-900 px-4 py-2"
        >
          <NavLink to="/" className={linkClass} end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink
            to="/contributors"
            className={linkClass}
            onClick={closeMenu}
          >
            Contributors
          </NavLink>
          <NavLink to="/contribute" className={linkClass} onClick={closeMenu}>
            Contribute
          </NavLink>
        </div>
      )}
    </header>
  );
}
