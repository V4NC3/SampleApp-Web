const UserReducer = (
    state = {
        isLoggedIn: false
        , firstName: ''
        , lastName: ''
        , email: ''
    }, action) => {
        switch(action.type) {
            case 'SET_LOGIN_STATE':
                state = {
                    isLoggedIn: true
                    , email: ''
                };
                break;
            default:
                state = {
                    email: ''
                    , isLoggedIn: false
                };
                break;
        }
    return state;
};

export default UserReducer;