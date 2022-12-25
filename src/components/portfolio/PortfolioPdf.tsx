import React from 'react'
import Contacts from '../contact/Contacts'
import Container from '../utilities/container/Container'
import Title from '../utilities/text/Title'

const PortfolioPdf: React.FC = () => {
  return (
    <Container className='w-full max-h-screen flex gap-8 bg-[#748DA6]'>
        <div className='w-full'>
          <Contacts />
        </div>
        <div className='w-full'>
          <Title className='!text-[32px]'>Get my portfolio here</Title>
          <a href='/cv.pdf' target="_blank" rel='noreferrer' className='inline-block p-4 rounded-lg cursor-pointer my-4 hover:opacity-70 duration-300 bg-gradient-to-r from-primary-100 to-secondary text-black hover:-translate-y-2' download="An CV">Download PDF</a>
        </div>
    </Container>
  )
}

export default PortfolioPdf