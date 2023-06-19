import React from 'react'
import "./SplashScreen.scss"
import splashS from "../../img/Logo.png" 

function SplashScreen() {
  return (
    <>
    <div className='splashScreen'>
        <img className='center' src={splashS} alt="splashS" />
    </div>
    </>
  )
}

export default SplashScreen