import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/views/button";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Button label="submit" title="hj"/>
      </div>
    </main>
  );
}
