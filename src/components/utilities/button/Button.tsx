import React from 'react'
import { ButtonModel } from '../../../models/utilities'

const Button: React.FC<ButtonModel> = ({children, className, type}) => {
  return (
    <button type={type} className={`${className} p-4 rounded-lg text-white bg-slate-500 cursor-pointer`}><a href='/data/cv.png' download>{children}</a></button>
  )
}

export default Button