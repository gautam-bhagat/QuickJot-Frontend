import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  const textcolor = {
'color' : '#000',
  }

  return (
    <div className='footer'>
      <div className="social-links">
       <Link style={textcolor} target='_blank' to='https://www.linkedin.com/in/igautambhagat/' ><i className="social-icon fa-brands fa-linkedin-in"></i></Link> 
       <Link style={textcolor} target='_blank' to='https://www.instagram.com/_gautam.in/'> <i className="social-icon fa-brands fa-instagram"></i></Link> 
       <a style={textcolor} target='_blank'  href='mailto:gautambhagat.business@gmail.com'> <i className="social-icon fa-solid fa-envelope"></i></a> 
       <Link style={textcolor} target='_blank' to='https://github.com/gautam-bhagat'> <i className="social-icon fa-brands fa-github"></i></Link> 
      </div>
      <span>Made with <i className=" heart fa-solid fa-heart"></i> by <strong>Gautam Bhagat</strong></span>
    </div>
  )
}

export default Footer
