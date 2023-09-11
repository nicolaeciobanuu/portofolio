import styles from "@/styles/card.module.scss";

type CardProps = {
  title: string;
  description: string;
  link: string;
};

export function Card({ title, description, link }: CardProps) {
  return (
    <a
      href={link}
      className={styles.link}
      title="Open in new tab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
}
