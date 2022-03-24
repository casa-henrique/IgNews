import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.´ng" type="image/png" />
        </Head>
        <body>
          <Main /> {/*todo nossa aplicação será renderizada nesse main*/}
          <NextScript />
          {/*onde o next vai colocar os arquivos js que a
          aplicação precisa para funcionar*/}
        </body>
      </Html>
    );
  }
}
