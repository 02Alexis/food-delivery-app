import React from 'react'
import "./Promo.scss"
import Promo1 from "../../img/Promo 1.png"
import Promo2 from "../../img/Promo 2.png"


function Promo() {
  return (
    <>
    <div className='promo'>
        <img src={Promo1} alt="promo1" />
        <img src={Promo2} alt="promo2" />
    </div>
    </>
  )
}

export default Promo