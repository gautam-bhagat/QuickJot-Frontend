import React from 'react'
import { Link } from 'react-router-dom'

function SigninSignup() {
  return (
    <ul>
                <li><Link id='signup-btn' to="/signup" rel="noopener noreferrer">Sign Up</Link></li>
                <li><Link id='signin-btn' to="/signin"  rel="noopener noreferrer">Sign In</Link></li>
    </ul>
  )
}

export default SigninSignup
