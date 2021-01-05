import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderBar>
      <h1>ArtFly Projects</h1>
      <nav>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
      </nav>
    </HeaderBar>
  );
}

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    padding-left: 10px;
  }

  nav {
    padding: 10px;

    a {
      padding: 10px;
    }
  }
`;
