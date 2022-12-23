import React from 'react'
import { ProjectModel } from '../../models/projectModel'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'

const ProjectCard:React.FC<ProjectModel> = ({title, role, githubLink, description}) => {
  return (
    <div className='py-4 leading-10'>
      <Title className='!text-[20px]'>{title} (<a href={githubLink} target='_blank' rel="noreferrer" className='font-semibold underline'>{githubLink}</a>)</Title>
      <Title className='!text-[16px]'>Role: {role}</Title>
      <Text className='!text-[16px]'>{description}</Text>
    </div>
  )
}

export default ProjectCard