import React from 'react'
import Title from '../utilities/text/Title'
import SkillList from './SkillList'

const Skills: React.FC = () => {
  return (
    <div className='w-full max-h-screen'>
        <Title className='!text-[32px]'>Skills</Title>
        <SkillList />
    </div>
  )
}

export default Skills