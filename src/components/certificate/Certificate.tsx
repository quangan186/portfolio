import React from 'react'
import Title from '../utilities/text/Title'
import Text from '../utilities/text/Text'

type CertificateModel = {
    title: string,
    from: string,
    time: string,
    link: string
}

const Certificate:React.FC<CertificateModel> = ({title, from, time, link}) => {
  return (
    <div className='flex justify-between py-4'>
        <a 
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline flex gap-4 "
        >
            <Title className='!text-[20px] !font-normal'>{title} | {from}</Title>
        </a>
        <Text className='!text-[16px] italic'>{time}</Text>
    </div>
  )
}

export default Certificate