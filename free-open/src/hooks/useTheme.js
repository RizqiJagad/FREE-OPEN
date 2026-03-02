import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/** Convenience hook for accessing theme state and toggle function. */
export function useTheme() {
  return useContext(ThemeContext);
}
