import React from 'react'
import Title from '../utilities/text/Title'
import ContactList from './ContactList'

const Contacts: React.FC = () => {
  return (
    <div>
        <Title className='!text-[32px]'>Contact</Title>
        <ContactList />
    </div>
  )
}

export default Contacts