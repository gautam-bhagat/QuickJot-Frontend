import React ,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Signup() {
    const [registration,setRegister] = useState({name : "",email : "",username:"",password:""})
    let navigate = useNavigate();

    const onChange = (e) =>{
        // console.log(e.target.value)
        setRegister({...registration , [e.target.name]:e.target.value})
    }

    const handleSignup = async (e) =>{
        e.preventDefault();
        const response =  await fetch('https://dark-gold-caterpillar-veil.cyclic.cloud/api/auth/createuser',{
            method :"POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name:registration.name,
                email : registration.email,
                username : registration.username,
                password: registration.password})
        });

        const json = await response.json();
        // console.log(json)
        if(json.success===1){
            alert(json.message)
            return navigate('/')
        }else{

            alert(json.message)
        }
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
