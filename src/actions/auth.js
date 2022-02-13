import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => { // tarea asincrona para el dispatch 
    return (dispatch) => {
        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({user})=> {
                    dispatch(
                        login( user.uid, user.displayName )
                    )
                    dispatch( finishLoading() )
            })
            .catch( e => {
                console.log(e);
                dispatch( finishLoading() );
            })
    }
} 
//! Dispatch gracias a Redux Thunk
export const startRegisterWithForm = ( email, password, name ) => {
    return( dispatch ) => {
        dispatch( startLoading() );
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {
                await user.updateProfile({ displayName: name });
                    dispatch(
                        login( user.uid, user.displayName )
                    )
                    dispatch( finishLoading() )
            })
            .catch( e => {
                console.log(e);
                dispatch( finishLoading() );
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