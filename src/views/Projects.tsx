import React, { useState } from 'react'
import Container from '../components/utilities/container/Container'
import Title from '../components/utilities/text/Title'
import ProjectList from '../components/projects/ProjectList'
import Button from '../components/utilities/button/Button'

const Projects: React.FC = () => {
  const [type, setType] = useState("web")

  return (
    <Container className='w-full !h-fit'>
        <div className='flex justify-between items-center'>
          <Title className='!text-[32px]'>Project Experiences</Title>
          <div className='flex gap-4'>
            <Button onClick={() => {setType("web")}} className='w-[100px] h-fit'>Web</Button>
            <Button onClick={() => {setType("mobile")}} className='w-[100px] h-fit'>Mobile</Button>
          </div>
        </div>
        
        <ProjectList type={type} />
    </Container>
  )
}

export default Projects