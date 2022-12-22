import React from 'react'
import Educations from '../components/education/Educations'
import Home from '../components/home/Home'
import PortfolioPdf from '../components/portfolio/PortfolioPdf'
import Profile from '../components/profile/Profile'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Container from '../components/utilities/container/Container'

const Portfolio: React.FC = () => {
  return (
    <Container className='bg-blue-300'>
        <Home />
        <Profile />
        <Projects />
        <Skills />
        <Educations />
        <PortfolioPdf />
    </Container>
  )
}

export default Portfolio