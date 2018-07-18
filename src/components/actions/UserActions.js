import { resolve } from "url";

export function loginUser(){
    return {
        type: 'SET_LOGIN_STATE',
        payload: new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(true);
            }, 2000);
        })
    };
}