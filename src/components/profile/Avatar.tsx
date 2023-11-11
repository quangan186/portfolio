import React from 'react'
import ava from '../../assets/img/ava.jpg'
import Image from '../utilities/image/Image'

const Avatar:React.FC = () => {
  return (
    <div className='w-fit'>
      <Image className='md:h-full max-h-[500px]' imgClassName='!rounded-full md:!rounded-2xl' children={ava} />
    </div>
  )
}

export default Avatar