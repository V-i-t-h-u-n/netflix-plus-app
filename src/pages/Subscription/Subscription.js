import React from 'react'
import './Subscription.css'
const Subscription = () => {
  const renewStyle = {
    color : 'black',
    backgroundColor : 'ButtonHighlight',
    border : 'solid 3px grey'
}

  return (
    <div className='Subscription text-center'>
      <h2 className='Subscription-info'>Active Subscriber</h2>
      <p style={renewStyle}>Subscription is about  to end in 7 Days!</p>

      <button className='Subscription-btn'>
        Renew Now
      </button>

    </div>
  )
}

export default Subscription