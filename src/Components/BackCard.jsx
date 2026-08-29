import React from 'react'

const BackCard = ( { setIsShowing }) => {
  return (
    <div className="container" onClick={()=> setIsShowing(false)}>
      <h2>Contact me</h2>
      <p>email: email@example.com</p>
      <p>phone number: +1 3171 111 553</p>
      <p className="truman">and in case i don't see ya.. good afternoon, good evening and good night!</p>
    </div>
  )
}

export default BackCard