import React from 'react';
import classNames from 'classnames/bind';
import styles from './Feed.module.scss';
const cx = classNames.bind(styles);


function Feed({className}){
    return (
        <div className={cx('Feed',className)}>
            <div className={cx('feed-top')}>
                <ul>
                    <li>Park Park</li>
                    <li>Tue Mar 09 2021</li>
                </ul>
                <button>0</button>
            </div>
            <div className={cx('feed-bottom')}>
                <h4>TItle</h4>
                <div>content</div>
                <a href={''}>Read More...</a>
            </div>
        </div>
    );
}

export default Feed;
