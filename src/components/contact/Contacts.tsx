import React, { useState } from 'react'
import Title from '../utilities/text/Title'
import {BsArrowUpCircle, BsArrowDownCircle} from 'react-icons/bs'
import Text from '../utilities/text/Text'
const Contacts: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState(false)
  return (
    <div className={`fixed bottom-0 w-full ${isDisplayed ? "translate-y-0": "translate-y-full"}`}>
        <div className={`w-full h-fit flex justify-end  text-white px-6 ${isDisplayed ? "translate-y-0": "-translate-y-full"}`}>
          <button onClick={() => {
            setIsDisplayed(!isDisplayed)
          }} className='bg-[#323B4C] w-[150px] h-[40px] rounded-t-2xl flex justify-around px-4 items-center gap-4'>
            <Text className='!text-[16px]'>My CV</Text> {isDisplayed ? <BsArrowDownCircle className='text-white text-[16px] font-bold' /> :<BsArrowUpCircle className='text-white text-[16px] font-bold' />}
          </button>
        </div>
        <div className={`bg-[#323B4C] w-full flex justify-between items-center border-y border-black py-2 px-8 `}>
          <Title className='!text-[20px] text-[#FFFBF5]'>Get my CV:</Title>
          <a href='/quangan-cv.pdf' download='Bui Quang An - Web developer.pdf' className='bg-[#FFFBF5] inline-flex items-center justify-center rounded-lg w-[150px] text-[#323B4C] h-[50px]'>
            Download here
          </a>
        </div>
        
    </div>
  )
}

export default Contacts