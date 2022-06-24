import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://use.fontawesome.com/releases/v5.12.1/css/svg-with-js.css"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="backdrop"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
