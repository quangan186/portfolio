import React from 'react'
import Container from '../utilities/container/Container'
import Title from '../utilities/text/Title'
import EducationList from './EducationList'

const Educations: React.FC = () => {
  return (
    <Container className='w-full bg-[#FFE6EB]'>
        <Title className='!text-[32px]'>Educations</Title>
        <EducationList />
    </Container>
  )
}

export default Educations