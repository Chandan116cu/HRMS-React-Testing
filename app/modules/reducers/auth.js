const initialState = {
    token: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SET_TOKEN:
            return {
                ...state,
                token: action.token
            }

        default:
            return state;
    }
};

export default auth;
