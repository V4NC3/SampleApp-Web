import axios from 'axios';

export function loginUser(data) {
    return {
        type: "SET_LOGIN_STATE",
        payload: axios.post(
            "https://localhost:3000/api/users/login/force",
            data,
            { withCredentials: true })
            .then(resp => resp.data.isSuccessful)
            .catch(err => Promise.reject('Invalid Login'))
        //.catch(err => { console.log("An error occurred while loggin in", err); return Promise.reject("invalid log in"); })
    };
}
export function logoutUser() {
    return {
        type: "SET_LOGIN_STATE", //set to _FULFILLED - because of how the UserReducer is now fulfilled
        payload: axios.get("https://localhost:3000/api/users/logout", { withCredentials: true })
            .then(resp => !resp.data.isSuccessful)
            .catch(err => console.log("An error occurred while logging out", err))
    };
}

export function currentLoginStatus(data) {

    return {
        type: "SET_HOMEPAGE_LOGIN_STATE", //set to _FULFILLED  
        payload: axios.get("https://localhost:3000/api/people/CurrentUser", { withCredentials: true })
            .then(resp => resp.data.item)
            .catch(err => {
                console.log("an error occurred while checking the login status", err);
                return true; // Set the status to not logged in
            })
    };
}

