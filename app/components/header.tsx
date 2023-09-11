import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Toggle } from "./toggle";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <h1 className={styles.name} title="Home">
            ciobanunicolae
          </h1>
        </Link>
        <p className={styles.description}>Developer based in Sibiu, Romania.</p>
      </div>
      <div className={styles.links}>
        <a
          title="Email"
          href="mailto:ciobanu.nicolae.j@gmail.com"
          className={styles.link}
          aria-label="Email"
        >
          <EnvelopeClosedIcon className={styles.logo} />
        </a>
        <a
          title="GitHub"
          href="https://github.com/ciobanunicolae"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="GitHub"
        >
          <GitHubLogoIcon />
        </a>
        <Toggle />
      </div>
    </header>
  );
}
