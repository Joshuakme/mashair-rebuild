import Head from "next/head";
// Import Global Layout
import Layout from "../components/layout/layout";
// Import Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Mashair Beauty</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
