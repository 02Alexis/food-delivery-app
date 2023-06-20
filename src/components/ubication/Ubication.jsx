import React from 'react'
import { MdLocationPin, MdKeyboardArrowDown } from "react-icons/md";
import "./Ubication.scss"

function Ubication() {
  return (
    <div className='ubication'>
      <MdLocationPin className='ubication__iconLocation'/>
      <div className='ubication__text'>
      <span className='title'>DELIVER TO</span>
      <span className='direccion'>882 Well St, New-York <MdKeyboardArrowDown className='direccion__iconArrowDow' /></span>
      </div>
    </div>
  )
}

export default Ubication