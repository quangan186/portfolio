import React from 'react'
import Text from '../components/utilities/text/Text'
import Title from '../components/utilities/text/Title'

const title: string = "Title"
const text: string = "Text"

const Preview: React.FC = () => {
  return (
    <div>
        <Title children={title} />
        <Text children={text} />
    </div>
  )
}

export default Preview