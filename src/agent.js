const API_ROOT = 'https://conduit.productionready.io/api';

let token = null;
const request = {
    get: url => fetch(`${API_ROOT}${url}`,{
        method: 'GET',
    })
};


const Articles = {
    feed:() => request.get('/articles'),
};


export default {
    Articles
};
