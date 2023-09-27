import Link from "next/link";
import styles from "./header.module.scss";
import { GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Toggle, Separator } from "@/components";

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/">ciobanunicolae</Link>
          <p>Developer based in Sibiu, Romania.</p>
        </div>
        <div className={styles.right}>
          <a
            title="Email"
            href="mailto:ciobanu.nicolae.j@gmail.com"
            aria-label="Email"
          >
            <EnvelopeClosedIcon className={styles.logo} />
          </a>
          <a
            title="GitHub"
            href="https://github.com/ciobanunicolae"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubLogoIcon />
          </a>
          <Toggle />
        </div>
      </div>
      <Separator />
    </header>
  );
}
