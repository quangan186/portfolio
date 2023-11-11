import React from 'react'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'

type EducationModel={
  title: string,
  school: string,
  gpa: number,
  startTime: string,
  endTime: string
}
const Education:React.FC<EducationModel> = ({title, school, gpa, startTime, endTime}) => {
  return (
    <div className='py-4'>
        <div className='flex gap-4'>
            <Title className='!text-[20px]'>{title}</Title>
            <Title className='!text-[20px] text-right'>{school}</Title>
        </div>
        <div className='flex justify-between'>
            <Text className='!text-[16px] py-4 italic'>GPA: {gpa} / 4.0</Text>
            <Text className='!text-[16px] py-4 italic'>({startTime} - {endTime})</Text>
        </div>
    </div>
  )
}

export default Education