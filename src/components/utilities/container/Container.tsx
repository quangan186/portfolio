import React from 'react'
import { Utilities } from '../../../models/utilities'

const Container: React.FC<Utilities> = ({children, className}) => {
  return (
    <div className={`${className} px-8 py-12`}>{children}</div>
  )
}

export default Container