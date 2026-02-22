import { useState, useEffect } from "react";

export const useThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("hanken_theme") === "dark" ||
        (!localStorage.getItem("hanken_theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("hanken_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("hanken_theme", "light");
    }
  }, [isDark]);

  return { isDark, toggle: () => setIsDark(!isDark) };
};
