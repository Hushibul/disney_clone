import React from 'react'
import '../css/minicard.css'
import MiniCardItem from './MiniCardItem'


const MiniCard = ({cards}) => {
  
  return (
    <div className='miniCard'>
      {cards.map((element) => (
            <MiniCardItem key={element.id} card ={element.image}/>
            
        ))}
    </div>
  )
}

export default MiniCard