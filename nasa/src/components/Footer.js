import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <h2>NASA Space Apps Challenge</h2>
      <h2 className='location'>HAROHALLI</h2>
      <div className='socials'>
        <button className='social-icon'>
            <img src="./instagram.png" />
        </button>
        <button className='social-icon'>
            <img src="./linkedin.png" />
        </button>
      </div>
      <p>Developed by <strong><span className='t-orange'>Nuthan B, Pavanananda K S</span></strong></p>
      <p><strong>Copyright 2023 Unique World Robotics.</strong> All Rights Reserved</p>
    </div>
  )
}

export default Footer
