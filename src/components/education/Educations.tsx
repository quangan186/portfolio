import React from 'react'
import Title from '../utilities/text/Title'
import EducationList from './EducationList'

const Educations: React.FC = () => {
  return (
    <div className='w-full max-h-screen'>
        <Title className='!text-[32px]'>Educations</Title>
        <EducationList />
    </div>
  )
}

export default Educations