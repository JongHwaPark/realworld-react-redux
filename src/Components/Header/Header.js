import React from 'react';
import { Link, NavLink  } from 'react-router-dom'
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header(){
    return (
        <div className={cx('header')}>
            <h2>
                <Link to='/'>LOGO</Link>
            </h2>
            <ul className={cx('menu')}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/signIn'>Sign in</NavLink >
                </li>
                <li>
                    <NavLink to='/signUp'>Sign up</NavLink >
                </li>
            </ul>
        </div>
    )
}

export default Header;
