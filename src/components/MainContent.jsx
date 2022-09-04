import React from 'react'
import ContentCard from './ContentCard'
import '../css/moviecard.css'

const MainContent = ({movies}) => {
  return (
    <div className='main-content'>
        {movies.map((element) => (
            <ContentCard key={element.id} image={element.image} /> 
        ))}
        
    </div>
  )
}

export default MainContent