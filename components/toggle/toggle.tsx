"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import styles from "./toggle.module.scss";
import * as React from "react";

export function Toggle() {
  
  const { theme, setTheme } = useTheme(); 
  return (
    <button
      type="button"
      title="Toggle Dark Mode"
      className={styles.toggle}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
