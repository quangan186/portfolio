import React from 'react'
import { certificates } from '../../constants/educations'
import Certificate from './Certificate'

const CertificateList: React.FC = () => {
  return (
    <div>
        {certificates.map((cert, index) => {
            return(
                <Certificate key={index} title={cert.title} from={cert.from} time={cert.time} link={cert.link} />
            )
        })}
    </div>
  )
}

export default CertificateList