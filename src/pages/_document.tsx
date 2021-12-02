import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  return() {
    <Html>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/imgs/favicon.png"
          sizes="32*32"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}

export default MyDocument;
