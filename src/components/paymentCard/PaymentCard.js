import React, { useState } from 'react'
import PlanCard from '../planCard/PlanCard'
import { BiRupee } from 'react-icons/bi';
import './PaymentCard.css'
import Icon6 from '../../assets/svg/Icon99.svg'
import Razorpay from '../../assets/icons/Razorpay.png'

const PaymentCard = () => {
  const [currentPlan ,setCurrentPlan] = useState(0)
  const discount = 20

  



  // const handleSelectedPlan = () => {
  //   setCurrentPlan(true)
  // }




  return (
    <>

        <div className="paymentCardOuter">
          <div className="paymentHeader">
            <div className="signSubscribe">
              <div className="signup">
                <p>1</p>
                <p>Sign Up</p>
              </div>
              <div className="subscribe">
                <p>2</p>
                <p>Subscribe</p>
              </div>
            </div>
            <div className="planHeading">
            <h3>Select your subscription plan</h3>
            </div>
          </div>
          <div className="planCards">
            <div className="x" >
              <PlanCard planData={{status: "Offer expired", total: 89, perMonth: 8, subscriptionTime: 12, disable: 1}}/>
            </div>
            <div className="x" onClick={() => setCurrentPlan(179)} id={currentPlan === 179? 'borderedPlan' : ''}>
              <PlanCard planData={{status: "Recommended", total: 179, perMonth: 15, subscriptionTime: 12, disable: 0, currentPlan}}/>
            </div>
            <div className="x" onClick={() => setCurrentPlan(149)} id={currentPlan === 149? 'borderedPlan' : ''}>
              <PlanCard planData={{status: "Deluxe Pack", total: 149, perMonth: 25, subscriptionTime: 6, disable: 0, currentPlan}}/>
            </div>
            <div className="x" onClick={() => setCurrentPlan(99)} id={currentPlan === 99? 'borderedPlan' : ''}>
              <PlanCard planData={{status: "Golden Pack", total: 99, perMonth: 33, subscriptionTime: 3, disable: 0, currentPlan}}/>
            </div>
          </div>

          <div className="planCalculation">
            <div className="initialTotal">
              <p>Subscription Fee</p>
              <p><BiRupee/> {currentPlan}</p>
            </div>

            <div className="limitedOfferOuter">
              <div className="limitedOffer">
                <div className="limitedOfferPrice">
                  <p>Limited time offer</p>
                  <p><span>- </span><span><BiRupee/> 20</span></p>
                </div>
                <div className="validityTime">
                  <img src={Icon6} alt="" className='limitedOfferIcon'/>
                  <p>Offer Valid till 25th March 2023</p>
                </div>
              </div>
            </div>

            <div className="finalTotal">
              <p><span>Total</span> (Incl. of 18% GST)</p>
              <p><BiRupee/> {currentPlan - discount}</p>
            </div>
          </div>

          <div className="buttons">
            <div className="cancel">
              <p>Cancel</p>
            </div>
            <div className="pay">
              Proceed to pay
            </div>
          </div>

          <div className="razorpayLogo">
            <img src={Razorpay} alt="" />
          </div>
        </div>
    </>
  )
}

export default PaymentCard