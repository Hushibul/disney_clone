import React from 'react'
import '../css/moviecard.css'

const ContentTitle = ({title}) => {
  return (
    <div className='title'>
        <h3>{title}</h3>
    </div>
  )
}

export default ContentTitle