import React from 'react'

function Signup() {
    return (
        <div className='signin-main'>
            <div className="signin-form">
                <h1>Start Writing!</h1>
                <form method='POST'>
                    <div className="form-ele">
                        <input type='name' id='name' name="name" placeholder='Full Name' />
                    </div>
                    <div className="form-ele">
                        <input type='email' id='email' name="email" placeholder='Email' />
                    </div>
                    <div className="form-ele">
                        <input type='name' id='username' name="username" placeholder='Username' />
                    </div>
                    <div className="form-ele">
                        <input type='password' id='password' name="password" placeholder='Password' />
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
