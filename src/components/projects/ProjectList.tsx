import React from 'react'
import { projectList } from '../../contents/projects'
import ProjectCard from './ProjectCard'

const ProjectList: React.FC = () => {
  return (
    <div className=''>
        {projectList.map((project, index) => {
          return <ProjectCard teamSize={project.teamSize} techStacks={project.techStacks} demo={project.demo} title={project.title} role={project.role} githubLink={project.githubLink} description={project.description} key={index}/>
        })}
    </div>
  )
}

export default ProjectList