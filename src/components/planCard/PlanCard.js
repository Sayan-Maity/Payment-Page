import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';
import './PlanCard.css'
const PlanCard = ({planData}) => {
    console.log(planData)
  return (
    <div>
        <div className="planCardOuter">
            <div className="status">
            {planData.currentPlan === planData.total ? (<><p>{planData.status}</p></>) : (<></>)}
                
            </div>
            <div className="middle">
                <div className="left">
                    <div className="check">
                        {/* {planData.currentPlan === planData.total ? (<><BsFillCheckCircleFill className='checkIcon'/></>) : (<><IoMdRadioButtonOn className='disableIcon'/></>)} */}

                        {planData.disable === 0 ? (planData.currentPlan === planData.total ? (<><BsFillCheckCircleFill className='checkIcon'/></>) : (<><IoMdRadioButtonOff  className='disableIcon'/></>)) : (<><IoMdRadioButtonOn className='disableIcon'/></>)}



                        
                    </div>
                    <div className="desc">
                        <p>{planData.subscriptionTime}</p>
                        <p>Months Subscription</p>
                    </div>
                </div>
                <div className="price">
                    <p>Total <span><BiRupee/>{planData.total}</span></p>
                    <p><span><BiRupee/>{planData.perMonth} </span> /mo</p>
                </div>
                
            </div>
            <div className="lower"></div>
        <div/>

        </div>
    </div>
  )
}

export default PlanCard