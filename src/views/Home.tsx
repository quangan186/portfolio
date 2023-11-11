import React from 'react'
import Title from '../components/utilities/text/Title'
import Profile from '../components/home/Profile'
import Container from '../components/utilities/container/Container'

const Home: React.FC = () => {
  return (
    <Container className='w-full md:h-screen flex flex-col bg-[#FFFBF5]'>
        <Title className='w-fit !text-[60px] break-words'>Welcome to my portfolio</Title>
        <Profile />
    </Container>
  )
}

export default Home