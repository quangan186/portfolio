import React from 'react'
import { ButtonModel } from '../../../models/utilities'

const Button: React.FC<ButtonModel> = ({children, className, type, onClick}) => {
  return (
    <button onClick={onClick} type={type} className={`${className} p-4 rounded-lg text-white bg-slate-500 cursor-pointer`}>{children}</button>
  )
}
export default Button