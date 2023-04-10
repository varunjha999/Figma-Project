import React from 'react'
import logoUrl from '../assets/image 21.png';
import img1 from '../assets/lock.png';
import img2 from '../assets/call.png';
import img3 from '../assets/mail.png';
import linkedIn from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/fb.png';
import instagram from '../assets/instagram.png';




const Footer = () => {
  return (
    <div className='footer'>
       
     <div className='parent'>
        <div className='child1'>
        <img src = {logoUrl} alt = "logo" />
        </div>

        <div className='child2'>
        <p>LearnInbox Platform Doesn't Guarantee On Your</p>
        <p>Academic Success.LearnInbox Intended To Start</p>
        <p>Your Own Research And Development.</p>
       <img src = {img1} alt = "logo" />
        <p>Your Information Is Protechted By</p>
        <p>256-Bit SSL Encryption</p>
        </div>

        <div className='child3'>
        <div>
          <p>Legal</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Disclaimer</li>
            <li>Refund & Cancellation Policy</li>
            <li>Academic Integrity</li>
          </ul>
        </div>
        <div>
          <p>Work With Us</p>
          <ul>
            <li>Become A Writer</li>
            <li>Become A Mentor</li>
            <li>Become A R&D Mentor</li>
            <li>Become A Developer</li>
            <li>Become A Trainer</li>
            <li>Become A Instructor</li>
          </ul>

        </div>
        <div>
        <p>Products</p>
        <ul>
            <li>Coding Services</li>
            <li>Kids-Box</li>
            <li>Project Camp</li>
            <li>Project Hackathon</li>
          </ul>
        </div>

       <div>
        <p>Learninbox</p>
        <li>About Us</li>
        <li>Blog</li>
        <li>ContactUs</li>
        <li>Events</li>
        <li>Careers</li>
       </div>

        </div>





     </div>

    <div>
    <img src = {img2} alt = "logo" /> 
      <h1>1800 <span>833</span> 21115</h1>
       <div>


      <div><img src = {img3} alt = "logo" /><h1>Mailto:Support@Learninbox.Com15</h1></div>


    <span><a href="https://mobile.twitter.com/varunjh42493046"><img src = {twitter} alt = "logo" /></a></span>
    
    <span><a href="https://m.facebook.com/varunjha999"><img src = {facebook} alt = "logo" /></a></span>

    <span><a href="https://www.linkedin.com/in/jhavarun999/"><img src = {linkedIn} alt = "logo" /></a>
    </span>
    
    
    <span><a href="https://www.instagram.com/beingvarunjha/"><img src = {instagram} alt = "logo" /></a></span>

    </div>
    </div>

    </div>
  )
}

export default Footer;