import React from 'react'
import Container from '../utilities/container/Container'
import Title from '../utilities/text/Title'
import Avatar from './Avatar'
import ProfileInfo from './ProfileInfo'

const Profile: React.FC = () => {
  return (
    <Container className='w-full bg-[#E1F2FB]'>
        <Title className='!text-[32px]'>Profile</Title>
        <div className='flex gap-4 w-full py-8'>
            <Avatar />
            <ProfileInfo />
        </div>
    </Container>
  )
}

export default Profile