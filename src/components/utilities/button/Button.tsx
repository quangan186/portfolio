import React from 'react'
import { Utilities } from '../../../model/utilities'

const Button = ({children, className}: Utilities) => {
  return (
    <button className={`${className} p-4 rounded-lg text-white bg-slate-500 cursor-pointer`}>{children}</button>
  )
}

export default Button