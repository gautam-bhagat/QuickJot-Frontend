import React, { useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom'
import SigninSignup from './SigninSignup';
import Logoutbtn from './Logoutbtn';


function Navbar() {


  let location = useLocation();

  useEffect(() => {
    // Google Analytics
    // console.log(location.pathname)
    // console.log(localStorage.getItem('logged'))
  }, [location]);

  return (
    <header className='navbar'>
      <div className="nav-left">
            <h1>QuickJot</h1>
      </div>
      <div className="nav-center">
      <ul>
            <li><Link className={`${location.pathname==='/'? 'active' : ''}`} to="/">Home</Link></li>
            <li><Link className={`${location.pathname==='/features'? 'active' : ''}`} to="/features">Features</Link></li>
            <li><Link className={`${location.pathname==='/about'? 'active' : ''}`} to="/about">About</Link></li>
            <li><Link className={`${location.pathname==='/faq'? 'active' : ''}`} to="/faq">FAQ</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        {
          localStorage.getItem('logged')?<Logoutbtn/>:<SigninSignup/>
        }
          
        
      </div>
    </header>
  )
}

export default Navbar
