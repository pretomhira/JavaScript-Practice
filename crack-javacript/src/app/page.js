import styles from "./page.module.css";

import { makeBoolean } from "./practice";

export default function Home() {
  const result1 = makeBoolean("test");
  const result2 = makeBoolean(null);
  console.log(result1);
  console.log(result2);

  return (
    <main className={styles.main}>
      <div>Java Practice</div>
    </main>
  );
}
