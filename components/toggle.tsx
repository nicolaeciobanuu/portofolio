"use client";
import { useTheme } from "next-themes";
import { SunIcon } from "@radix-ui/react-icons";
import styles from "./toggle.module.css";

export function Toggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon />
    </button>
  );
}
