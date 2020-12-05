import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <MyFooter>Chris is figuring out things...</MyFooter>
    </>
  );
}

const MyFooter = styled.footer`
  border-top: 1px solid black;
  width: 100%;
  text-align: center;
  padding: 20px;
`;
