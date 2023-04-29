import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import './Navbar.css'
import Logo from '../../assets/icons/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="left">
      <div className="logo">
        <img src={Logo} alt="" className='logoImage'/>
      </div>
      <div className="menu">
        <p>Courses</p>
        <AiOutlineDown/>
      </div>
      <div className="menu">
        <p>Programs</p>
        <AiOutlineDown/>
      </div>
    </div>
    <div className="right">
        <BsSearch/>
      <div className="menuButton">
        <p>Login</p>
      </div>
      <div className="menuButton">
        <p>JOIN NOW</p>
      </div>
    </div>
        
    </div>
  )
}

export default Navbar