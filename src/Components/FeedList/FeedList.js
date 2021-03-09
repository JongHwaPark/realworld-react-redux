import React, {useEffect} from 'react';
import {Feed} from '../Feed';
import agent from '../../agent';
import classNames from 'classnames/bind';
import styles from './FeedList.module.scss';
const cx = classNames.bind(styles);

function FeedTab(){
    return (
        <nav>
            <li>Global Feed</li>
            <li>Local Feed</li>
        </nav>
    );
}

function Feeds(){
    return (
        <article>
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>
        </article>
    );
}

function FeedList({className}){
    useEffect(()=>{

        const fetchData = async ()=>{
            const response = await agent.Articles.feed();
            const data = await response.json();
            console.log(data);
        };
        fetchData();
    },[]);

    return (
        <div className={cx('FeedList',className)}>
            <FeedTab />
            <Feeds />
        </div>
    );
}

export default FeedList;
