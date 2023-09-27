import styles from "./projects.module.scss";
import { Card, Separator } from "@/components";
import { ProjectsList } from "@/config";
export function Projects() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.list}>
          {ProjectsList.map((project, key) => (
            <Card
              key={key}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <Separator />
    </section>
  );
}
