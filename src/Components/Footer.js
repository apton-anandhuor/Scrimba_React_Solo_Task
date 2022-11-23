import React from 'react'
import Facebook from "../Images/Icons/Facebook_Icon.png"
import Twitter from "../Images/Icons/Twitter_Icon.png"
import Instagram from "../Images/Icons/Instagram_Icon.png"
import Github from "../Images/Icons/GitHub_Icon.png"

export default function Footer() {
  return (
    <div className='footer'>
        <ul>
            <li><img src={Twitter} alt='Twitter_Icon' width='25px'/></li>
            <li><img src={Facebook} alt='Facebook_Icon' width='25px'/></li>
            <li><img src={Instagram} alt='Instagram_Icon' width='25px'/></li>
            <li><img src={Github} alt='Github_Icon' width='25px'/></li>
        </ul>
    </div>
  )
}
