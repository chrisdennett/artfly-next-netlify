import Link from "next/link";
import styled from "styled-components";

export const ProjectPreview = ({ project }) => {
  const {
    link,
    module: { meta },
  } = project;

  return (
    <Article>
      <h1>{meta.title}</h1>
      <div>
        <p>{meta.description}</p>
        <span>{meta.date}</span>
      </div>
      <Link href={"/projects" + link}>
        <a>Read more →</a>
      </Link>
    </Article>
  );
};

const Article = styled.article`
  background-color: white;
  margin: 10px;
  padding: 1.5em;
`;
