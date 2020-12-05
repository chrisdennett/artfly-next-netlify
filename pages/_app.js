import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Projects" description="My Projects">
      <Component {...pageProps} />
    </Layout>
  );
}
