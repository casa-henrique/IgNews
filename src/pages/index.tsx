import Head from "next/head";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        {/*Componente react que anexa dados ao head do _document. Importante para SEO*/}
        <title>Inicio | Ig.News</title>
      </Head>
      <h1 className={styles.title}>Hello World</h1>
    </>
  );
}
