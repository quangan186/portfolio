import React from 'react'
import Title from '../utilities/text/Title'
import ContactList from './ContactList'
import Container from '../utilities/container/Container'

const Contacts: React.FC = () => {
  return (
    <Container className='bg-[#323B4C] flex !h-fit !px-8 !py-4'>
        <div className='w-full'>
          <Title className='!text-[32px] text-[#FFFBF5]'>Contacts</Title>
          <ContactList /> 
        </div>
        <div className='w-full'>
          <Title className='!text-[32px] text-[#FFFBF5]'>My CV</Title>
          <a href='/public/quangan-cv.pdf' download='Bui Quang An - Web developer.pdf' className='my-4 bg-[#FFFBF5] inline-flex items-center justify-center rounded-lg w-[150px] h-[60px]'>
            Download here
          </a>
        </div>
        
    </Container>
  )
}

export default Contacts