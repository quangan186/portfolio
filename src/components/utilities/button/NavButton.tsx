import { NavButtonModel } from '../../../models/navButtonModel'
import { Link } from 'react-router-dom'


const NavButton = ({to, title, className, onClick}: NavButtonModel) => {
  return (
    <Link onClick={onClick} to={to} className={`${className}`}>{title}</Link>
  )
}

export default NavButton