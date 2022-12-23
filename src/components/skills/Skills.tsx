import React from 'react'
import Container from '../utilities/container/Container'
import Title from '../utilities/text/Title'
import SkillList from './SkillList'

const Skills: React.FC = () => {
  return (
    <Container className='w-full max-h-screen bg-[#F1F9F9]'>
        <Title className='!text-[32px]'>Skills</Title>
        <SkillList />
    </Container>
  )
}

export default Skills