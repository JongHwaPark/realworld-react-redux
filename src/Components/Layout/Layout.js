import React from 'react';
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
const cx = classNames.bind(styles);

function Layout({children}){
    return (
        <div className={cx('layout')}>
            {children}
        </div>
    );
}

export default Layout;
