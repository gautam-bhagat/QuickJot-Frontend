import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Signin() {

    let navigate = useNavigate();
    const [credentials,setCredentials] = useState({username : "",password:""})

    const handleLogin = async (e) =>{
        e.preventDefault();
        const res = await fetch("https://dark-gold-caterpillar-veil.cyclic.cloud/api/auth/login",{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({username:credentials.username , password:credentials.password})
        });

        const json = await res.json();
        // console.log(json)
        if(json.success === 1){
            localStorage.setItem('logged',true);
            localStorage.setItem('authtoken',json.authtoken);
            return navigate('/')
        }else{
            alert(json.message)
        }
    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name] : e.target.value })
    }

    return (
        <div className='signin-main'>
            <div className="signin-form">
            <Link className='logo-form-link' to='/'><h2>QuickJot</h2></Link>
                
                <h1>Welcome Back !</h1>
                <form onSubmit={handleLogin} >
                    <div className="form-ele">
                        <input required className='input-form' onChange={onChange}  type='name' id='username' name="username" placeholder='Username' />
                    </div>
                    <div className="form-ele">
                        <input  required className='input-form' type='password' onChange={onChange} id='password' name="password" placeholder='password' />
                    </div>
                    <div className="form-ele">
                        <input type='submit' value="Login" />
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Signin
