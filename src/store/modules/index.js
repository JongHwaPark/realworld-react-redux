import { combineReducers } from 'redux';
import articles from './articles';
import auth from './Auth';


export default combineReducers({
    articles,
    auth
});
