import React from 'react'

const Login = () => {
  return (
    <div className="bg">
        <div className="container">
            <h1>Login</h1>
            <h2>Hey, Enter your details below</h2>
            <div>
            <input className="email-pass" type="email" placeholder="Enter your Email"/>
            </div>
            <div>
            <input type="password" className="email-pass" placeholder="Password"/>
            </div>
            <div>
                Forgot Password? <a hre="/">Click here !</a>
            </div>
            <div>
                <button className="login-btn">Login</button>
            </div>
            <div>
                <p>-Or Sign in with-</p>
            </div>
            <div>
                <span>
                    <button className="">Google</button>
                </span>
                <span>
                    <button>Apple ID</button>
                </span>
                <span>
                    <button>Facebook</button>
                </span>
            </div>
            <div>
                <span>Dont have an account? </span>
                <a href="/">Sign up</a>
            </div>
        </div>
        
    </div>
  )
}

export default Login