import React from 'react'
import ava from '../../assets/img/ava.jpg'
import Image from '../utilities/image/Image'

const Avatar:React.FC = () => {
  return (
    <div className='w-fit h-fit'>
      <Image className='!h-full' imgClassName='!rounded-full md:!rounded-2xl' children={ava} />
    </div>
  )
}

export default Avatar