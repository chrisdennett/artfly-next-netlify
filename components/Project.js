import { ProjectHead } from "./ProjectHead";

// Project was BlogPost, isProject was isBlogPost

export default function Project({ children, meta }) {
  return (
    <>
      <ProjectHead meta={meta} isProject />
      <h2>This is here</h2>
      <article>{children}</article>
    </>
  );
}
