// validation codes working.  
const UserReducer = (
    state = {
        //...state,
        isLoggedIn: false
        , userName: ''
        , firstName: ''
        , lastName: ''


    }, action) => {
    switch (action.type) {
        case 'SET_LOGIN_STATE_FULFILLED':
            state = {
                ...state,
                isLoggedIn: true
                , userName: ''
            };
            break;
        // default: state = {
        //     isLoggedIn: false
        // };
        case 'SET_HOMEPAGE_LOGIN_STATE':
            state = {
                ...state,
                userName: ''
                , firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
            break;
        default:
            // state = {
            //     ...state,
            //     userName: ''
            //     , isLoggedIn: false
            // };
            break;
    }
    return state;
};
export default UserReducer;