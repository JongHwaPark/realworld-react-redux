import React from 'react';
import styles from './SignIn.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function SignIn(){
    return (
        <div className={cx('layout')}>
            <div className={cx('content')}>
                SignIn
            </div>
        </div>
    )
}

export default SignIn;
