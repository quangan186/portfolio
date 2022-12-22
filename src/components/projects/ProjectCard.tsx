import React from 'react'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'

const ProjectCard:React.FC = () => {
  return (
    <div className=''>
      <Title className='!text-[20px]'>Project title</Title>
      {/* <a href='#' target='_blank'>Github link</a> */}
      <Text>Description</Text>
    </div>
  )
}

export default ProjectCard