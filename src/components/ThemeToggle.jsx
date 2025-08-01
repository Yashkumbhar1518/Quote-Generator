function ThemeToggle({ toggleTheme, isDark }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDark ? 'Dark' : 'light'}
    </button>
  );
}

export default ThemeToggle
