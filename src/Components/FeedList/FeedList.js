import React from 'react';
import { useSelector } from 'react-redux'
import {Feed} from '../Feed';
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

function Feeds({onClickFavorite}){
    const feedList = useSelector(state => state.articles.articles);
    return (
        <article>
            {
                feedList.map((data, index) =>
                    <Feed
                        key={index}
                        slug={data.slug}
                        name={data.author.username}
                        title={data.title}
                        time={data.createdAt}
                        content={data.description}
                        favoritesCount={data.favoritesCount}
                        onClickFavorite={onClickFavorite}
                    />
                )}
        </article>
    );
}

function FeedList({className, onClickFavorite}){
    return (
        <div className={cx('FeedList',className)}>
            <FeedTab />
            <Feeds
                onClickFavorite={onClickFavorite}
            />
        </div>
    );
}

export default FeedList;
