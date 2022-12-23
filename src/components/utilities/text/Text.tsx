import React from 'react'
import { Utilities } from '../../../models/utilities'

const Text = ({children, className}: Utilities) => {
  return (
    <p className={`${className} text-[28px] font-now tracking-wider`}>
        {children}
    </p>
  )
}

export default Text