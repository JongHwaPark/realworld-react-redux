import React from 'react';
import { Link  } from 'react-router-dom'
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import {useInput} from '../../../Common/Hooks';
import agent from "../../../agent";
const cx = classNames.bind(styles);

function SignUp(){
    console.log(useInput);
    const name = useInput('');
    const email = useInput('');
    const password = useInput('');

    const handleClickSignUp = async () => {
        try {
            const response = await agent.Auth.register(name.value, email.value, password.value);
            const data = await response.json();
            console.log(data);
            console.log('setClick sign up');
        } catch (err){
            console.log(err);
            window.alert('Error');
        }
    };

    return (
        <div className={cx('content')}>
            <h1>Sign Up</h1>
            <div><Link to='/signIn'>Have an account?</Link></div>
            <ul>
                <li><input placeholder='Username' {...name} /></li>
                <li><input placeholder='Email' {...email} /></li>
                <li><input type='password' placeholder='Password' {...password} /></li>
                <li>
                    <button onClick={handleClickSignUp}>Sign Up</button>
                </li>
            </ul>
        </div>
    )
}

export default SignUp;
