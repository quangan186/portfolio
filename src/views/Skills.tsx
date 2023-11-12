import React from 'react'
import Container from '../components/utilities/container/Container'
import Title from '../components/utilities/text/Title'
import SkillList from '../components/skills/SkillList'

const Skills: React.FC = () => {
  return (
    <Container className='w-full h-fit'>
        <Title className='!text-[32px]'>Skills</Title>
        <SkillList />
    </Container>
  )
}

export default Skills