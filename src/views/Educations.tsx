import React from 'react'
import Container from '../components/utilities/container/Container'
import Title from '../components/utilities/text/Title'
import EducationList from '../components/education/EducationList'
import CertificateList from '../components/certificate/CertificateList'
import { extraActivities } from '../constants/educations'


const Educations: React.FC = () => {
  return (
    <Container className=' w-full'>
        <div>
          <Title className='!text-[32px]'>Educations</Title>
          <EducationList />
        </div>
        
        <div>
          <Title className='!text-[32px]'>Certificates</Title>
          <CertificateList />
        </div>
        
        <div className='py-4'>
          <Title className='!text-[32px]'>Extra Activities</Title>
          <ul className='list-disc px-4'>
            {extraActivities.map((act, index) => {
              return(
                <li key={index} className='text-[20px] leading-10 py-4'>{act}</li>
              )
            })}
          </ul>
          
        </div>

    </Container>
  )
}

export default Educations