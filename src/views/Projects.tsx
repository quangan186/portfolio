import React, { useState } from 'react'
import Container from '../components/utilities/container/Container'
import Title from '../components/utilities/text/Title'
import ProjectList from '../components/projects/ProjectList'
import Button from '../components/utilities/button/Button'

const Projects: React.FC = () => {
  const [type, setType] = useState("web")

  return (
    <Container className='w-full !h-fit'>
        <div className='flex justify-between items-center w-full'>
          <Title className='!text-[32px]'>Projects Experience</Title>
          <div className='flex gap-4 items-center text-[#323B4C]'>
            <Button onClick={() => {setType("web")}} className={`relative w-[100px]  h-fit !py-2 !bg-transparent !text-[#323B4C] ${type === 'web' ? "btn-active": ""}`}>Web</Button>
            |
            <Button onClick={() => {setType("mobile")}} className={`relative w-[100px] !py-2 !bg-transparent h-fit !text-[#323B4C] ${type === 'mobile' ? "btn-active": ""}`}>Mobile</Button>
          </div>
        </div>
        
        <ProjectList type={type} />
    </Container>
  )
}

export default Projects