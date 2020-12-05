import Head from "next/head";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <Page>
        <Header />
        <main>{children}</main>
        <Footer />
      </Page>
    </>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
    background-color: whitesmoke;
  }
`;
