import React from 'react'
import Container from '../components/utilities/container/Container'
import Title from '../components/utilities/text/Title'
import ProjectList from '../components/projects/ProjectList'

const Projects: React.FC = () => {
  return (
    <Container className='w-full !h-fit'>
        <div className='flex justify-between items-center w-full'>
          <Title className='!text-[32px]'>Projects Experience</Title>
        </div>
        
        <ProjectList />
    </Container>
  )
}

export default Projects