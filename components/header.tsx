import Link from "next/link";
import styles from "./header.module.css";
import { GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Toggle } from "./toggle";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <h2 className={styles.name}>ciobanunicolae</h2>
        </Link>
        <p className={styles.description}>Developer based in Sibiu, Romania</p>
      </div>
      <div className={styles.links}>
        <Link
          href="mailto:ciobanu.nicolae.j@gmail.com "
          className={styles.link}
        >
          <EnvelopeClosedIcon />
        </Link>
        <Link
          href="https://github.com/ciobanunicolae"
          target="_blank"
          className={styles.link}
        >
          <GitHubLogoIcon />
        </Link>
        <Toggle />
      </div>
    </header>
  );
}
