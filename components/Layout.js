import Head from "next/head";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
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
