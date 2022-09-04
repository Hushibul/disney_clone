import React from 'react'

import '../css/moviecard.css'

const ContentCard = ({image}) => {
  return (
    <div className='content-card'>
        
        <img src={image} alt="content_image" />
          
    </div>
  )
}

export default ContentCard