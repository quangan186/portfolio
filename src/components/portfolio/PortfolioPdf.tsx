import React from 'react'
import Button from '../utilities/button/Button'
import Title from '../utilities/text/Title'

const PortfolioPdf: React.FC = () => {
  return (
    <div className='w-full max-h-screen flex flex-col justify-center items-center'>
        <Title className='!text-[32px] text-center'>Get my portfolio here</Title>
        <Button className='my-4'>Download PDF</Button>
    </div>
  )
}

export default PortfolioPdf