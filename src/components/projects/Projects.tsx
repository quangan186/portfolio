import React from 'react'
import Title from '../utilities/text/Title'
import ProjectList from './ProjectList'

const Projects: React.FC = () => {
  return (
    <div className='w-full max-h-screen'>
        <Title className='!text-[32px]'>Project Experiences</Title>
        <ProjectList />
    </div>
  )
}

export default Projects