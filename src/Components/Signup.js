import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [registration,setRegister] = useState({name : "",email : "",username:"",password:""})

    const onChange = (e) =>{
        console.log(e.target.value)
        setRegister({...registration , [e.target.name]:e.target.value})
    }

    const handleSignup = async (e) =>{
        e.preventDefault();
        const response =  await fetch('')
    }

    return (
        <div className='signin-main'>
            
            
            <div className="signin-form">
            <Link className='logo-form-link' to='/'><h2>QuickJot</h2></Link>
                <h1>Start Writing!</h1>
                <form onSubmit={handleSignup}>
                    <div className="form-ele">
                        <input required className='input-form' type='text' onChange={onChange} id='name' name="name" placeholder='Full Name' />
                    </div>
                    <div className="form-ele">
                        <input required className='input-form' type='email' onChange={onChange} id='email' name="email" placeholder='Email' />
                    </div>
                    <div className="form-ele">
                        <input required className='input-form' type='name' onChange={onChange} id='username' name="username" placeholder='Username' />
                    </div>
                    <div className="form-ele">
                        <input required className='input-form' type='password' onChange={onChange} id='password' name="password" placeholder='Password' />
                    </div>
                    <div className="form-ele">
                        <input type='submit' value="Register" />
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Signup
