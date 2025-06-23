import React from "react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Switch theme"
      title={theme === "light" ? "Turn on dark theme" : "Turn on light theme"}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;