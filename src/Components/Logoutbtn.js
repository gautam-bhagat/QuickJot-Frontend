import React from 'react'
import { useNavigate } from 'react-router-dom';


function Logoutbtn() {
    let navigate = useNavigate();
    const handleLogout=(e)=>{
        // e.preventDefault();
        localStorage.removeItem('logged');
        localStorage.removeItem('authtoken');
        return navigate('/signin')
    }
  return (
    <ul>
                <li><input className='logout-btn' type='button' id='signup-btn' to="/signup" rel="noopener noreferrer" onClick={handleLogout} value="Log Out"/></li>
     </ul>
  )
}

export default Logoutbtn
