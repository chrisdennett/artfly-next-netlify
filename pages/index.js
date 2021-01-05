import { projects } from "../getAllProjects";
import { ProjectPreview } from "@components/ProjectPreview";
import styled from "styled-components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={"Artfly projects"}></meta>
        <title>{"ArtFly Projects"}</title>
      </Head>

      <ProjectCards>
        {projects.map((project) => (
          <ProjectPreview key={project.link} project={project} />
        ))}
      </ProjectCards>
    </>
  );
}

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
