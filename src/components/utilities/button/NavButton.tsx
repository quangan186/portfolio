import React from 'react'
import { NavButtonModel } from '../../../models/navButtonModel'
import { Link } from 'react-router-dom'


const NavButton = ({to, title, className}: NavButtonModel) => {
  return (
    <Link to={to} className={`${className} `}>{title}</Link>
  )
}

export default NavButton