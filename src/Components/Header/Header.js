import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);


function Header(){
    return (
        <div className={cx('header')}>
            <h2>LOGO</h2>
            <ul className={cx('menu')}>
                <li>Home</li>
                <li>Sign in</li>
                <li>Sign up</li>
            </ul>
        </div>
    )
}

export default Header;
