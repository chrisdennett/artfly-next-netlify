import { projects } from "../getAllProjects";
import { ProjectPreview } from "@components/ProjectPreview";

export default function Home() {
  return (
    <>
      <div>
        {projects.map((project) => (
          <ProjectPreview key={project.link} project={project} />
        ))}
      </div>
    </>
  );
}
