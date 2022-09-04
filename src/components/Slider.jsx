import React from 'react'
import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/slider.css"

const Slider = ({banner}) => {
  return (
    <Carousel fade>
        
        {banner.map((element) => (
            <Carousel.Item key={element.id}>
                
                <img className='d-block w-100 v-height' src={element.image} alt="Slider_Image" />
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Slider