import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'auth/LOGIN';

export const login = createAction(LOGIN);

const initState = {
    user:{
        bio: null,
        createdAt: "",
        email: "",
        id: null,
        image: null,
        token: "",
        updatedAt: "",
        username: "",
    }
};

export default handleActions({
    [LOGIN]: (state, {payload}) => {
        return {
            user:{
                ...state.user,
                id:payload.id,
                createAt:payload.createAt,
                updateAt:payload.updateAt,
                email:payload.email,
                token:payload.token,
                username:payload.username,
                image:payload.image,
            },
        }
    }
}, initState);
