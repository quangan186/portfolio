import React from 'react'
import linkedin from '../../assets/svg/linkedin.svg'
import Image from '../utilities/image/Image'
import facebook from '../../assets/svg/facebook.svg'
import instagram from '../../assets/svg/instagram.svg'
import github from '../../assets/svg/github.svg'
const ContactList: React.FC = () => {
  return (
    <div className='flex gap-8'>
        <a href='https://www.facebook.com/profile.php?id=100013348872340' target='_blank' rel="noreferrer" className='my-4 inline-block'><Image className='!w-[60px] !h-[60px]' imgClassName='!rounded-none' children={facebook} /></a>
        <a href='https://www.linkedin.com/in/ân-bùi-842875235/' target='_blank' rel="noreferrer" className='my-4 inline-block'><Image className='!w-[60px] !h-[60px]' imgClassName='!rounded-none' children={linkedin} /></a>
        <a href='https://www.instagram.com/quangan186/' target='_blank' rel="noreferrer" className='my-4 inline-block'><Image className='!w-[60px] !h-[60px]' imgClassName='!rounded-none' children={instagram} /></a>
        <a href='https://github.com/quangan186' target='_blank' rel="noreferrer" className='my-4 inline-block'><Image className='!w-[60px] !h-[60px]' imgClassName='!rounded-none' children={github} /></a>
    </div> 
  )
}

export default ContactList