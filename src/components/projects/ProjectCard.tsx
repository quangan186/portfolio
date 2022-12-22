import React from 'react'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'

const ProjectCard:React.FC = () => {
  return (
    <div className='py-4'>
      <Title className='!text-[20px]'>Project title (<a href='https://github.com/quangan186' target='_blank' rel="noreferrer" className='font-semibold underline'>Github link</a>)</Title>
      <Text className='!text-[16px]'>Description</Text>
    </div>
  )
}

export default ProjectCard