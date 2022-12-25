import React from 'react'
import Image from '../utilities/image/Image'
import { contactList } from '../../contents/contacts'
const ContactList: React.FC = () => {
  return (
    <div className='flex md:gap-8 flex-wrap'>
      {contactList.map((contact, index) => (
        <a href={contact.contactLink} target='_blank' rel="noreferrer" className='my-4 inline-block hover:-translate-y-2 hover:shadow-2xl duration-300 rounded-full'><Image className='!w-[60px] !h-[60px] hover:opacity-70 duration-300' imgClassName='!rounded-none' children={contact.icon} key={index}/></a>
      ))}
      
    </div> 
  )
}

export default ContactList