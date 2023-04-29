import React from 'react'
import DescBody from '../components/descBody/DescBody'
import PaymentCard from '../components/paymentCard/PaymentCard'
import './FrontPage.css'
import Navbar from '../components/navbar/Navbar'

const FrontPage = () => {
  return (
    <div className='mainBodyOuter'>
      <Navbar/>
      <div className="mainBody">
        <div className="left">
          <DescBody/>
        </div>
        <div className="right">
          <PaymentCard/>
        </div>
      </div>
    </div>
  )
}

export default FrontPage