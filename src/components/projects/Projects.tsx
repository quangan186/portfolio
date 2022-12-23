import React from 'react'
import Container from '../utilities/container/Container'
import Title from '../utilities/text/Title'
import ProjectList from './ProjectList'

const Projects: React.FC = () => {
  return (
    <Container className='w-full bg-[#F3DFE3]'>
        <Title className='!text-[32px]'>Project Experiences</Title>
        <ProjectList />
    </Container>
  )
}

export default Projects