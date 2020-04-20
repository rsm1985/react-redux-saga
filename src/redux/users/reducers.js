const defaultState = {
    loading: false
};

export const usersReducer = (state = defaultState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'GET_USERS':
            return { ...state, loading: true };
        // case SAVE_FILTERED_DEVICES: {
        //     return {
        //         ...state,
        //         filteredDevices: payload
        //     };
        // }

        default:
            return state;
    }
};
