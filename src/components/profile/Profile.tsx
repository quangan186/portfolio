import React from 'react'
import Avatar from './Avatar'
import ProfileInfo from './ProfileInfo'

const Profile: React.FC = () => {
  return (
    <div>
        <h1 className='font-bold'>Profile</h1>
        <div>
            <Avatar />
            <ProfileInfo />
        </div>
    </div>
  )
}

export default Profile