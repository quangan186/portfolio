import React from 'react'
import Education from './Education'
import { educations } from '../../constants/educations'

const EducationList: React.FC = () => {
  return (
    <div>
        {
          educations.map((education, index) => {
            return(
              <Education key={index} title={education.degree} school={education.school} gpa={education.gpa} startTime={education.startTime} endTime={education.endTime} testamur={education.testamur}/>
            )
          })
        }
    </div>
  )
}

export default EducationList