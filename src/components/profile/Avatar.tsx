import React from 'react'
import ava from '../../assets/img/ava.jpg'
import Image from '../utilities/image/Image'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'

const Avatar:React.FC = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Image children={ava} />
      <Title className='py-4 !text-[20px] text-center'>An Bui</Title>
      <Text className='!text-[16px] text-center !font-semibold'>Web developer</Text>
    </div>
  )
}

export default Avatar