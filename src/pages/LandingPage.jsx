import React from 'react'
import { Link } from 'react-router-dom'
import '../css/landing.css'
import Navbar from '../components/Navbar'
import logo1 from '../assets/images/cta-logo-one.svg'
import logo2 from '../assets/images/cta-logo-two.png'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <Navbar />
        <div className="container">
            <div className="upperlogo">
                <img src={logo1} alt="logoOne" />
            </div>
                <div className="text-conatainer">
                    <Link className='get-all-access' to="/home">Get All There</Link>
                    <p>Get Premier Access to Raya and the last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1. </p>
                </div>
            <div className="lowerlogo">
                <img src={logo2} alt="logoTwo" />
            </div>
        </div>
    </div>
  )
}

export default LandingPage