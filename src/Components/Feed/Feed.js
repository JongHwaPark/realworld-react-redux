import React from 'react';
import classNames from 'classnames/bind';
import styles from './Feed.module.scss';
const cx = classNames.bind(styles);


function Feed({slug, name, time, title, content, favoritesCount, className, onClickFavorite}){

    return (
        <div className={cx('Feed',className)}>
            <div className={cx('feed-top')}>
                <ul>
                    <li>{name}</li>
                    <li>{time}</li>
                </ul>
                <button onClick={()=> onClickFavorite(slug)}>{favoritesCount}</button>
            </div>
            <div className={cx('feed-bottom')}>
                <h4>{title}</h4>
                <div>{content}</div>
                <a href={''}>Read More...</a>
            </div>
        </div>
    );
}

export default Feed;
