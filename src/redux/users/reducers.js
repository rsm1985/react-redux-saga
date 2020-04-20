const defaultState = {
    loading: false
};

export const usersReducer = (state = defaultState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'GET_USERS':
            return { ...state, loading: true };
        case 'USERS_RECEIVED':
            return { ...state, news: action.json, loading: false }
        default:
            return state;
    }
};
