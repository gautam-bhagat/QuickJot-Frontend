import React from 'react'

function Signin() {
    return (
        <div className='signin-main'>
            <div className="signin-form">
                <h1>Welcome Back !</h1>
                <form method='POST'>
                    <div className="form-ele">
                        <input type='name' id='username' name="username" placeholder='Username' />
                    </div>
                    <div className="form-ele">
                        <input type='password' id='password' name="password" placeholder='password' />
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
