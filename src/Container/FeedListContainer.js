import React, {useEffect, useCallback} from 'react';
import {FeedList} from "../Components/FeedList";
import {useDispatch} from "react-redux";
import agent from "../agent";
import * as articlesActions from "../store/modules/articles";


function FeedListContainer({className}){
    const dispatch = useDispatch();

    const fetchData = useCallback(async ()=>{
        const data = await agent.Articles.feed();
        console.log(data);
        dispatch(articlesActions.setArticles(data));
    },[dispatch]);
    useEffect(()=>{
        fetchData();
    },[fetchData]);

    const handleClickFavorite = async (slug) => {
        const response = await agent.Articles.favorite(slug);
        const data = await response.json();
    };

    return (
        <FeedList
            className={className}
            onClickFavorite={handleClickFavorite}
        />
    )
}

export default FeedListContainer;
