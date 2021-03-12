import React, {useState} from 'react';
import { Link  } from 'react-router-dom'
import {useDispatch} from "react-redux";
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import {useInput} from '../../../Common/Hooks';
import * as authActions from "../../../store/modules/Auth";
import agent from "../../../agent";
const cx = classNames.bind(styles);

function ErrorList({errors}){
    const list = Object.entries(errors);
    return(
      <ul>
          {list.map(([key, error], index) => <li key={index}>{key} {error[0]}</li>)}
      </ul>
    );
}

function SignUp({history}){
    console.log('렌더링 된다공');
    const dispath = useDispatch();
    const name = useInput('');
    const email = useInput('');
    const password = useInput('');
    const [errors, setErrors] = useState({});

    const handleClickSignUp = async () => {
        try {
            await agent.Auth.register(name.value, email.value, password.value);
            const loginData = await agent.Auth.login(email.value, password.value);
            dispath(authActions.login(loginData.user));
            window.localStorage.setItem('jwt', loginData.user.token);
            agent.setToken(loginData.user.token);
            history.push('/');
        } catch (err){
            setErrors(err.response.body.errors);
            console.error(err);
        }
    };

    return (
        <div className={cx('content')}>
            <h1>Sign Up</h1>
            <div><Link to='/signIn'>Have an account?</Link></div>
            <ErrorList errors={errors}/>
            <ul>
                <li><input placeholder='Username' {...name} /></li>
                <li><input placeholder='Email' {...email} /></li>
                <li><input type='password' placeholder='Password' {...password} /></li>
                <li><button onClick={handleClickSignUp}>Sign Up</button></li>
            </ul>
        </div>
    )
}

export default SignUp;
