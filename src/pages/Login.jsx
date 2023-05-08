import React from 'react';
import '../styles.scss';

export default function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Chat App</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='Enter email' />
                <input type="password" placeholder='Enter password'/>
                <button>Sign In</button>
            </form>
            <p>Don't have an account?<span> Register</span> </p>
        </div>
    </div>
  )
}