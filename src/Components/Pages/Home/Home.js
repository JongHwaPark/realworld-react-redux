import React from 'react';
import {Banner} from '../../Banner';
import {Tags} from "../../Tags";
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import FeedListContainer from "../../../Container/FeedListContainer";
const cx = classNames.bind(styles);

function Home(){
    return (
        <div className={cx('layout')}>
            <Banner />
            <div className={cx('content')}>
                <FeedListContainer className={cx('feedList')}/>
                <Tags className={cx('tags')}/>
            </div>
        </div>
    )
}

export default Home;
