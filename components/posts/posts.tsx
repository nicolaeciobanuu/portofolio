import styles from "./posts.module.scss";
import { Separator } from "@/components";

export function Posts() {
  return (
    <section className={styles.posts}>
      <h2>Posts</h2>
      <p>
        Nothing <strong>yet</strong> here.
      </p>
      <Separator />
    </section>
  );
}
