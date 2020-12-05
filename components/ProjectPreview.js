import Link from "next/link";
import { ProjectHead } from "./ProjectHead";

export const ProjectPreview = ({ project }) => {
  const {
    link,
    module: { meta },
  } = project;

  return (
    <article>
      <ProjectHead meta={meta} />
      <Link href={"/projects" + link}>
        <a>Read more →</a>
      </Link>
    </article>
  );
};
