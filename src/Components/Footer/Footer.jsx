import React from 'react'
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user from '../../assets/user_icon.svg';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={footer_logo} alt=''/>
            <p>I'm a Java Full Stack Developer from India with 1+ years of experience</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={user} alt=''/>
                <input type='email' placeholder='enter your email'/>
            </div>
            <div className='footer-subscribe'>
                Subscribe
            </div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
            <div className='footer-bottom-left'>© 2024 Shivasai Avinash. All rights reserved.</div>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With me</p>
            </div>
      </div>
    </div>
  )
}

export default Footer;
