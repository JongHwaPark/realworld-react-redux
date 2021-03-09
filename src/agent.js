const API_ROOT = 'https://conduit.productionready.io/api';

const request = {
    get: url => fetch(`${API_ROOT}${url}`,{ method: 'GET'})
};


const Articles = {
    feed:() => request.get('/articles/feed?limit=10&offset=0'),
};


export default {
    Articles
};
