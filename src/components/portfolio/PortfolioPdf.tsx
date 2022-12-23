import React from 'react'
import Contacts from '../contact/Contacts'
import Button from '../utilities/button/Button'
import Container from '../utilities/container/Container'
import Title from '../utilities/text/Title'

const PortfolioPdf: React.FC = () => {
  return (
    <Container className='w-full max-h-screen flex bg-[#AEDADD]'>
        <div className='w-full'>
          <Contacts />
        </div>
        <div className='w-full'>
          <Title className='!text-[32px]'>Get my portfolio here</Title>
          <Button className='my-4 hover:opacity-70 duration-300 bg-[#F2D1D1] text-black'>Download PDF</Button>
        </div>
    </Container>
  )
}

export default PortfolioPdf