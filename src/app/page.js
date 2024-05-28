import Navbar from "./components/views/app-header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        Hello Traveller!
      </div>
    </main>
  );
}
