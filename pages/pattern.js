import Head from "next/head";
import styles from "../styles/Home.module.css";
import Pattern from "../components/History/index";
import Result from "../components/Result/index";
import { Store, Context } from "../pages/store/store";

export default function Home() {
  const store = new Store();

  return (
    <div className={styles.container}>
      <Head>
        <title>MVVM w/ MobX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Context.Provider value={store}>
          <Pattern />
          <Result />
        </Context.Provider>
      </main>
    </div>
  );
}
