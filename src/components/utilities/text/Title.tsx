import React from 'react'
import { Utilities } from '../../../model/utilities'

const Title: React.FC<Utilities> = ({children, className}) => {
  return (
    <h1 className={`${className} w-full font-bold text-[60px]`}>
        {children}
    </h1>
  )
}

export default Title