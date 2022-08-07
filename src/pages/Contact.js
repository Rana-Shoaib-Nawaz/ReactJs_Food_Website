import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(https://images7.alphacoders.com/421/421534.jpg)`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id="contact-form" method='POST'>
          <label htmlFor="name">Name</label>
          <input type='text' name='name' placeholder='Enter Your Name' />
          <label htmlFor="email">Email</label>
          <input type='email' name='email' placeholder='Enter Your Email' />
          <label htmlFor="message">Message</label>
          <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='Submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
