import React from 'react'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'

const Education:React.FC = () => {
  return (
    <div className='py-4'>
        <div className='flex'>
            <Title className='!text-[20px]'>Bachelor of Information Technology</Title>
            <Title className='!text-[20px] text-right'>RMIT University Vietnam</Title>
        </div>
        <Text className='!text-[16px] py-4'>GPA: 3.3 / 4.0</Text>
    </div>
  )
}

export default Education