import React from 'react';
import {Banner} from '../../Banner';
import {FeedList} from "../../FeedList";
import {Tags} from "../../Tags";
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Home(){
    return (
        <div className={cx('layout')}>
            <Banner />
            <div className={cx('content')}>
                <FeedList className={cx('feedList')}/>
                <Tags className={cx('tags')}/>
            </div>
        </div>
    )
}

export default Home;
