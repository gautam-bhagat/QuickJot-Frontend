import React from 'react'

function Navbar() {

  return (
    <header className='navbar'>
      <div className="nav-left">
            <h1 ><strong>QuickJot</strong></h1>
      </div>
      <div className="nav-center">
      <ul>
            <li><a href="#"><b>Home</b></a></li>
            <li><a href="#"><b>Features</b></a></li>
            <li><a href="#"><b>About</b></a></li>
            <li><a href="#"><b>FAQ</b></a></li>
        </ul>
      </div>
      <div className="nav-right">
       
            <ul>
                <li><a id='signup-btn' href="#" target="_blank" rel="noopener noreferrer">Sign Up</a></li>
                <li><a id='signin-btn' href="#" target="_blank" rel="noopener noreferrer">Sign In</a></li>
                
            </ul>
        
      </div>
    </header>
  )
}

export default Navbar
