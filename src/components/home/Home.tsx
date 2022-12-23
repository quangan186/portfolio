import React from 'react'
import Title from '../utilities/text/Title'

const Home: React.FC = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-primary-100 to-secondary'>
        <Title className='text-center'>Welcome to my portfolio</Title>
    </div>
  )
}

export default Home