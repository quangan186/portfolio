import React from 'react'
import Container from '../components/utilities/container/Container'
import Title from '../components/utilities/text/Title'
import WorkExperienceList from '../components/work-experiences/WorkExperienceList'


const WorkExperiences: React.FC = () => {
  return (
    <Container className='w-full h-fit'>
        <Title className='!text-[32px]'>Work Experience</Title>
        <WorkExperienceList />
    </Container>
  )
}

export default WorkExperiences