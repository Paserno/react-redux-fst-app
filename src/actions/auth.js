import { types } from '../types/types'

export const startLoginEmailPassword = (email, password) => { // tarea asincrona para el dispatch 
    return (dispatch) => {

        setTimeout(() => {

            dispatch( login(123, 'Pepe') );

        }, 3500);
    }
} 


export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}