import styles from "./card.module.scss";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

type CardProps = {
  title: string;
  description: string;
  link: string;
};

export function Card({ title, description, link }: CardProps) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={link}
        title="Open in new tab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
      >
        View Project
        <ArrowTopRightIcon />
      </a>
    </article>
  );
}
