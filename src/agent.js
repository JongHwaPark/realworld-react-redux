const API_ROOT = 'https://conduit.productionready.io/api';

const request = {
    get: url => fetch(`${API_ROOT}${url}`,{
        method: 'GET',
    }),
    post: (url, body) => fetch(`${API_ROOT}${url}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(body)
    }),
    del: url => fetch(`${API_ROOT}${url}`,{
        method: 'DELETE',
    })
};

const Auth = {
    register: (username, email, password) => request.post('/users',{
        user: { username, email, password }
    })
};

const Articles = {
    feed:() => request.get('/articles'),
    favorite: slug => request.post(`/articles/${slug}/favorite`),
    unfavorite: slug => request.post(`/articles/${slug}/favorite`),
};


export default {
    Articles,
    Auth
};
