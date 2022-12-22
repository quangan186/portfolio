import React from 'react'
import Title from '../utilities/text/Title'
import Avatar from './Avatar'
import ProfileInfo from './ProfileInfo'

const Profile: React.FC = () => {
  return (
    <div className='w-full max-h-screen'>
        <Title className='!text-[32px]'>Profile</Title>
        <div className='flex w-full h-full py-8'>
            <Avatar />
            <ProfileInfo />
        </div>
    </div>
  )
}

export default Profile