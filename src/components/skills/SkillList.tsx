import React from 'react'
import { skillsList } from '../../contents/skills'
import SkillType from './SkillType'

const SkillList: React.FC = () => {
  return (
    <div className='md:flex gap-12'>
        <SkillType skillType='Frontend' skills={skillsList.frontend} />
        <SkillType skillType='Backend' skills={skillsList.backend}/>
        <SkillType skillType='Others' skills={skillsList.others}/>
    </div>
  )
}

export default SkillList