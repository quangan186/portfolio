import React from 'react'
import { ImageModel } from '../../../models/utilities'

const Image: React.FC<ImageModel> = ({children, className, imgClassName}) => {
  return (
    <div className={`${className} w-[300px] h-[300px] `}>
        <img src={children} alt='' className={`${imgClassName} w-full h-full object-cover rounded-full`}/>
    </div>
  )
}

export default Image