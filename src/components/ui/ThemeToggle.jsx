import { useTheme } from "../../hooks/useTheme";

/**
 * ThemeToggle renders a text-only button to switch between light and dark mode.
 * The button label shows what mode the user will switch TO.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600
                 text-sm font-medium text-gray-700 dark:text-gray-300
                 hover:bg-gray-100 dark:hover:bg-gray-700
                 transition-colors focus:outline-none focus:ring-2
                 focus:ring-brand-teal focus:ring-offset-1"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
