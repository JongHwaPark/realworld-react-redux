import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Feed} from '../Feed';
import agent from '../../agent';
import classNames from 'classnames/bind';
import styles from './FeedList.module.scss';
import * as articlesActions from '../../store/modules/articles';
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
    const feedList = useSelector(state => state.articles.articles);
    console.log(feedList);
    return (
        <article>
            {
                feedList.map(data =>
                    <Feed
                        name={data.author.username}
                        title={data.title}
                        time={data.createdAt}
                        content={data.description}
                        favoritesCount={data.favoritesCount}
                    />
                )}
        </article>
    );
}

function FeedList({className}){
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await agent.Articles.feed();
            const data = await response.json();
            dispatch(articlesActions.setArticles(data));
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
