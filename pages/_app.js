import Head from "next/head";
// Import Global Layout
import Layout from "../components/layout/layout";
// Import Providers
import { SessionProvider } from "next-auth/react";
// Import Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Head>
          <title>Mashair Beauty</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }

export default MyApp;
