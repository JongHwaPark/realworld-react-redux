import React from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
const cx = classNames.bind(styles);

function Banner(){
    return (
        <div className={cx('Banner')}>
            <h2>Conduit</h2>
            <h4>A place to sjare your knowledge</h4>
        </div>
    );
}

export default Banner;
