import React from 'react'
import Email from '../Images/Icons/Email_Icon.png'
import Linkedin from '../Images/Icons/linkedin.png'

export default function NameSection() {
  return (
    <div className='Name-Section'>
      <h1>Laura Smith</h1>
      <p className='position'>Frontend Developer</p>
      <p className='website'>laurasmith.website</p>
      <div className='Buttons'>
        <button className='Btn-1' href='#'>
          <img src={Email} alt='Email Icon' width='15px' />
          Email
        </button>
        <button className='Btn-2' href='#'>
        <img src={Linkedin} alt='Email Icon' width='15px' />
          Linkedin
        </button>
      </div>
    </div>
  )
}
