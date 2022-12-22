import React from 'react'
import SkillType from './SkillType'

const SkillList: React.FC = () => {
  return (
    <div className='flex'>
        <SkillType />
        <SkillType />
        <SkillType />
    </div>
  )
}

export default SkillList