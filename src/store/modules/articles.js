import { createAction, handleActions } from 'redux-actions';

const SET_ARTICLES = 'articles/SET_ARTICLES';

export const setArticles = createAction(SET_ARTICLES);

const initState = {
    articles:[],
    articlesCount:0
};

export default handleActions({
    [SET_ARTICLES]: (state, {payload}) => {
        return {
            articles: payload.articles,
            articlesCount: payload.articlesCount,
        }
    }
}, initState);
