import React from 'react'
import Button from '../utilities/button/Button'
import Title from '../utilities/text/Title'

const PortfolioPdf: React.FC = () => {
  return (
    <div className='w-full max-h-screen'>
        <Title className='!text-[32px]'>Get my portfolio here</Title>
        <Button>Download PDF</Button>
    </div>
  )
}

export default PortfolioPdf