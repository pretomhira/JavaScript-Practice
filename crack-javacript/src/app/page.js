import styles from "./page.module.css";
import countDuplicate from "./practice";

export default function Home() {
  const array = [1, 2, 1, 1, 1, 3, 3, 4];
  const result = countDuplicate(array);
  console.log(result);

  return (
    <main className={styles.main}>
      <div>Java Practice</div>
    </main>
  );
}
