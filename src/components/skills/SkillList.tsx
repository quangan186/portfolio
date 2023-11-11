import React from 'react'
import { skillsList } from '../../constants/skills'
import SkillType from './SkillType'

const SkillList: React.FC = () => {
  return (
    <div className='md:flex'>
        <SkillType skillType='Frontend' skills={skillsList.frontend} />
        <SkillType skillType='Backend' className='md:border-x md:border-x-black md:px-4 md:mx-4' skills={skillsList.backend}/>
        <SkillType skillType='Others' skills={skillsList.others}/>
    </div>
  )
}

export default SkillList