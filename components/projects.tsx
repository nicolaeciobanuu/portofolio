import styles from "./projects.module.css";
import { Card } from "./card";
export function Projects() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>Projects</h1>
      <div className={styles.cards}>
        <Card
          title="timer"
          description="Pomodoro inspired accesible timer."
          link="https://pomodoro.ciobanunicolae.com"
        />
        <Card
          title="shortest-path-vis"
          description="Shortest path between two points."
          link="https://ciobanunicolae.github.io/shortest-path-vis/"
        />
        <Card
          title="calculator"
          description="Calculator app on an iPhone."
          link="https://calculator.ciobanunicolae.com/"
        />
        <Card
          title="js-keycodes"
          description="Capture user interactions with the keyboard."
          link="https://ciobanunicolae.github.io/js-keycodes/"
        />
      </div>
    </section>
  );
}
