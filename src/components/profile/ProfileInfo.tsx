import React from 'react'
import Text from '../utilities/text/Text'

const ProfileInfo:React.FC = () => {
  return (
    <div className='w-full leading-10'>
      <Text className='!text-[20px]'>- Full name: <span>Bui Quang An</span></Text>
      <Text className='!text-[20px]'>- Date of Birth: <span>18/06/2002</span></Text>
      <Text className='!text-[20px]'>- Gender: <span>Male</span></Text>
      <Text className='!text-[20px]'>- Email: <span>quangan186@gmail.com</span></Text>
      <Text className='!text-[20px]'>- Hobbies: <span>Coding web, Playing sports, Play video games, Play guitar</span></Text>
      <Text className='italic !text-[20px]'>"Personally, I am a sociable, honest, funny, hardworking person and always try to learn from people around me to improve myself as well as for the work I do to achieve the best quality. My life motto is that people can do it, I can do it"</Text>
    </div>
  )
}

export default ProfileInfo