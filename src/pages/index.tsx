import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/*Componente react que anexa dados ao head do _document. Importante para SEO*/}
        <title>Inicio | Ig.News</title>
      </Head>
      <h1>Hello World</h1>
    </>
  );
}
