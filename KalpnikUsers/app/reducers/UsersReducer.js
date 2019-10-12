const initialState = {
    usersList: [],
};

const UsersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case 'SAVE_USER_LIST':
            console.log(payload)
            return { ...state, usersList: payload.data };
        case 'CREATE_NEW_ROOM':
            return { ...state, usersList: [...state.usersList, payload.data] };
        case 'DELETE_USER': {
            const { id } = payload;
            return {...state, usersList: state.usersList.filter(user => user.id !== id)}
        }

        default:
            return state;
    }
}

export default UsersReducer;