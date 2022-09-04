import React from 'react'
import '../css/minicard.css'

const MiniCardItem = ({card}) => {
  return (
    <div className='miniCardItem'>
        <img src={card} alt="disney"/>
    </div>
  )
}

export default MiniCardItem