import styles from "./page.module.css";

import { removeFalsy } from "./practice";

export default function Home() {
  const falsyArray = [1, "test", "", null, 0, "fruit", { key: "value" }];
  const result = removeFalsy(falsyArray);
  console.log(result);

  return (
    <main className={styles.main}>
      <div>Java Practice</div>
    </main>
  );
}
