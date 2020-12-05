import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>ArtFly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ArtFly" />
        <p>My attempt to make artfly with next.</p>
      </main>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
