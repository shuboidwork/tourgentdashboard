import React from "react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div className={styles.center}>Hello Traveller!</div>
    </main>
  );
}
