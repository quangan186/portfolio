import React from 'react'
import ProfileInfo from '../profile/ProfileInfo'

const Profile: React.FC = () => {
  return (
    <div className='w-full flex flex-col justify-between gap-4 h-full py-4'>
      <ProfileInfo />
    </div>
  )
}

export default Profile