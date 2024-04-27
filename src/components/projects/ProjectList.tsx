import React from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "./ProjectCard";

const ProjectList: React.FC = () => {

  return (
    <>
      <div className="relative ">
        {projects.map((project) => {
          return (
            <div className="" key={project.id}>
              <ProjectCard
                id={project.id}
                teamSize={project.teamSize}
                techStacks={project.techStacks}
                demo={project.demo}
                title={project.title}
                role={project.role}
                githubLink={project.githubLink}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectList;
