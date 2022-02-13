import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => { // tarea asincrona para el dispatch 
    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({user})=> {
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e => {
                console.log(e);
            })
    }
} 
//! Dispatch gracias a Redux Thunk
export const startRegisterWithForm = ( email, password, name ) => {
    return( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {
                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e => {
                console.log(e);
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName)
                )
            });
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