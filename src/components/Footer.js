import React from 'react'

function Footer() {
  return (
    <section className='footer'>
      <h2>NASA Space Apps Challenge</h2>
      <h2 className='location'>HAROHALLI</h2>
      <div className='socials'>
        <button className='social-icon'>
            <img src="./instagram.png" alt="instagram icon" />
        </button>
        <button className='social-icon'>
            <img src="./linkedin.png" alt="linked in icon" />
        </button>
      </div>
      <p>Developed by <strong><span className='t-orange'>Nuthan B, Pavanananda K S</span></strong></p>
      <p><strong>Copyright 2023 Unique World Robotics.</strong> All Rights Reserved</p>
    </section>
  )
}

export default Footer
