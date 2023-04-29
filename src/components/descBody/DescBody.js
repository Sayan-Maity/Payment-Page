import React from 'react'
import { BiRupee } from 'react-icons/bi';
import Image from '../../assets/icons/Icon.png'
import Image2 from '../../assets/icons/Icon2.png'
import Image3 from '../../assets/icons/Icon3.png'
import Image4 from '../../assets/icons/Icon4.png'
import Image5 from '../../assets/icons/Icon5.png'
import './DescBody.css'

const DescBody = () => {
  return (
    <div>
      <div className="descBody">
        <h1>Access curated courses worth</h1>
        <div className='secondHeading'>
          <h1><BiRupee/></h1>
          <div className='boldPrice'>
            <h1>18,500</h1>
            <div className="strike"></div>
          </div>
          <h1 className='boldHeading'>at just <span><BiRupee/>99</span> per year!</h1>
        </div>

        <ul>
          <li><img src={Image} alt="" /> <span>100+</span> Job relevant courses</li>
          <li><img src={Image2} alt="" /> <span>20,000+</span> Hours of content</li>
          <li><img src={Image3} alt="" /> <span>Exclusive</span> webinar access</li>
          <li><img src={Image4} alt="" /> Scholarship worth <span><BiRupee/>94,500</span></li>
          <li><img src={Image5} alt="" /> <span>Ad Free</span> learning experience</li>
        </ul>
      </div>
    </div>
  )
}

export default DescBody