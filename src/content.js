import React from 'react'
import './content.css'

const Content = () => {
  return (
    <div className='about'>
      <div className="vision">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8cba9b30761023.5639f18980df1.jpg" alt="" />
        <div className="viscontent">
        <h1>Our Vision</h1>
      <p>We at SheSafe believe in a safe and secure public environment for the women around us.
        We aim in providing an open platform for the strong women of society to earn and travel with freedom in absence of sense of insecurity. 
      </p>
      </div>
      </div>
      <div className="work">
      <h1>What we do? </h1>
      <div className="workcontent">
      <img src="https://media.istockphoto.com/id/1089511686/vector/taxi-service-mobile-application-carpool-late-night-female-passenger-waiting-for-a-car-flat.jpg?s=612x612&w=0&k=20&c=AYwgg4XoXMIfcmPYUAlAB4v3HPE6naV4U6JKENevwXE=" alt="" />
      <p>SheSafe is a platform focussed on security aspect of women in society. It is well described as for the Ladies, by the Ladies and of the Ladies. We provide a platform for women drivers to earn a respectable living and at the same time, a safe journey for the ordinary women.
        Our services also unite unknown beautiful ladies at a common route to walk with a sense of security. You can join us to book a ride with a woman driver with fair charges and par services. Also, finding a walkmate at unknown routes is also simple with our Chatbuddy.
      </p>
      
      </div>
      </div>
    </div>
  )
}

export default Content
