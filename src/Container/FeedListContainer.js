import React, {useEffect, useCallback} from 'react';
import {FeedList} from "../Components/FeedList";
import {useDispatch} from "react-redux";
import agent from "../agent";
import * as articlesActions from "../store/modules/articles";


function FeedListContainer({className}){
    const dispatch = useDispatch();

    const fetchData = useCallback(async ()=>{
        const response = await agent.Articles.feed();
        const data = await response.json();
        dispatch(articlesActions.setArticles(data));
    },[dispatch]);
    useEffect(()=>{
        fetchData();
    },[fetchData]);

    const handleClickFavorite = async (slug) => {
        console.log(slug);
        const response = await agent.Articles.favorite(slug);
        console.log(response);
        const data = await response.json();
        console.log(data);
    };

    return (
        <FeedList
            className={className}
            onClickFavorite={handleClickFavorite}
        />
    )
}

export default FeedListContainer;
