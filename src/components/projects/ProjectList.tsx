import React, { useEffect, useState } from "react";
import { mobileProjects, webProjects } from "../../constants/projects";
import ProjectCard from "./ProjectCard";
import { ProjectModel } from "../../models/projectModel";

type ProjectListProps = {
  type: string
};

const ProjectList: React.FC<ProjectListProps> = ({type}) => {
  const [projects, setProjects] = useState<ProjectModel[]>([])

  useEffect(() => {
    setProjects(type === "web" ? webProjects : mobileProjects)
  }, [type])

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
