import React from 'react'
import Text from '../utilities/text/Text'

const ProfileInfo:React.FC = () => {
  return (
    <div className='w-full leading-10'>
      <Text className='!text-[20px]'>- Full name: <span>Bui Quang An</span></Text>
      <Text className='!text-[20px]'>- Date of Birth: <span>18/06/2002</span></Text>
      <Text className='!text-[20px]'>- Gender: <span>Male</span></Text>
      <Text className='!text-[20px]'>- Hobbies: <span>Coding web, Playing sports, Play video games, Play guitar</span></Text>
      <Text className='italic !text-[20px]'>"Currently, I am an Information Technology student at RMIT University Vietnam and I am interested in developing web and mobile apps, especially in front-end developments. Moreover, thanks to the knowledge and some projects I have done during my study, I can solve some basic back-end problems."</Text>
    </div>
  )
}

export default ProfileInfo