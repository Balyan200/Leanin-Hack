import React from 'react'
import './feedhome.css'
const Feedhome = () => {
  return (
    <div className='Feedback'>
        <h1>Reviews</h1>
        <div className="card">
          <div className="card_head">
          <span>12-01-2023</span>
          <h2>Supriya Sharma</h2>
          
          <img src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt=''/ >         
          </div><hr style={{width: '70%'}}/>
          <p>Loved the journey and the services. SheSafe is really the way of safest and amazing travel.</p>
        </div>
        <div className="card">
        <div className="card_head">
        <span>06-02-2023</span>
          <h2>Mihika Sardana</h2>
          
          <img src="https://cdn-icons-png.flaticon.com/128/992/992001.png" alt=''/ >
          </div>
          <hr style={{width: '70%'}}/><p>Loved the feeling of safety with drive</p>
        </div>
        {/* <div className="card">
          <h3>Anonymous</h3>
          <p>Loved the feeling of safety with drive</p>
        </div> */}
        <a href="http://" target="_blank" rel="noopener noreferrer">Read more</a>
      
    </div>
  )
}

export default Feedhome
