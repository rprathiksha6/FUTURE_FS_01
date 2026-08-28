import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.css";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <Sun size={16} className="theme-toggle-icon theme-toggle-icon-sun" aria-hidden="true" />
      <Moon size={16} className="theme-toggle-icon theme-toggle-icon-moon" aria-hidden="true" />
      <span className={`theme-toggle-knob ${isDark ? "is-dark" : ""}`} aria-hidden="true" />
    </button>
  );
}
