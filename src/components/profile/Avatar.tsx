import React from 'react'
import ava from '../../assets/img/ava.jpg'
import Image from '../utilities/image/Image'

const Avatar:React.FC = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <Image children={ava} />
    </div>
  )
}

export default Avatar