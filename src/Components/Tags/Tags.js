import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tags.module.scss';
const cx = classNames.bind(styles);

function TagList(){
    return (
        <ul>
            <li className={cx('tag')}>Sida</li>
            <li className={cx('tag')}>Sida</li>
            <li className={cx('tag')}>Sida</li>
            <li className={cx('tag')}>Sida</li>
            <li className={cx('tag')}>Sida</li>
            <li className={cx('tag')}>Sida</li>
            <li className={cx('tag')}>Sida</li>
        </ul>
    )
}

function Tags({className}){
    return (
        <div className={cx('Tags',className)}>
            <h5>Popuplar Tags</h5>
            <TagList />
        </div>
    );
}

export default Tags;
