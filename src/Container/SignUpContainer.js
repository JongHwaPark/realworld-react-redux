import React from 'react';
import { Link  } from 'react-router-dom'

function SignUp(){
    return (
        <div className={cx('content')}>
            <h1>Sign Up</h1>
            <div><Link to='/signIn'>Have an account?</Link></div>
            <ul>
                <li><input placeholder='Username' /></li>
                <li><input placeholder='Email' /></li>
                <li><input placeholder='Password' /></li>
                <li><button>Sign in</button></li>
            </ul>
        </div>
    )
}

export default SignUp;
