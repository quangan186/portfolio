import React from 'react'
import { Utilities } from '../../../models/utilities'

const Container: React.FC<Utilities> = ({children, className}) => {
  return (
    <div className={`${className} pt-[80px] pb-[20px] px-8 h-screen !text-[#737373]`}>{children}</div>
  )
}

export default Container