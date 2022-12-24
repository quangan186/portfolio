import React from 'react'
import { projectList } from '../../contents/projects'
import ProjectCard from './ProjectCard'

const ProjectList: React.FC = () => {
  return (
    <div className='flex flex-col gap-8'>
        {projectList.map((project, index) => {
          return <ProjectCard title={project.title} role={project.role} githubLink={project.githubLink} description={project.description} key={index}/>
        })}
    </div>
  )
}

export default ProjectList