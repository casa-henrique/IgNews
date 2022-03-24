import Head from "next/head";
import { GetStaticProps } from "next";

import { SubscribeButton } from "../components/SubscribeButton";

import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

interface HomeProps {
  product: { priceId: string; amount: number };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        {/*Componente react que anexa dados ao head do _document. Importante para SEO*/}
        <title>Home | Ig.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KgwbzGtLPzSpS2eDV1n6o21");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: { product }, //Tudo que passarmos como props nós poderemos acessar nas props da função home neste caso
    revalidate: 60 * 60 * 24, //= 24 horas
  };
};
