import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig"

import { typesLogin } from "../types/types";
import { addRegisterUserFirestoreAsync } from "./actionRegister";

//--------------------Logout----------------------//

export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth();
            signOut((auth))
                .then(({user}) => {
                    dispatch(logoutSync())
                    localStorage.removeItem('userAc')
                    console.log('Adios', user)
                })
                .catch(error => {
                    console.warn(error);
                })
                
    }
}

export const logoutSync = () => {
    return {
        type: typesLogin.logout
        
    }
}

//--------------------Login Google--------------------//
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({user}) => {
        dispatch(loginSincronico(user.email, user.password))
        const role= 'usuario';
        dispatch(addRegisterUserFirestoreAsync (user.email, user.pass, user.displayName, role, user.uid))
          console.log(user, 'Usuario autorizado');
        })
        .catch(error => {
            console.warn(error, 'No autorizado');
        })
    }
}
//--------------------Login Facebook--------------------//
export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then(({user}) => {
        dispatch(loginSincronico(user.email, user.password))
        const role= 'usuario';
        dispatch(addRegisterUserFirestoreAsync (user.email, user.pass, user.displayName, role, user.uid))
          console.log(user, 'Usuario autorizado');
        })
        .catch(error => {
            console.warn(error, 'No autorizado');
        })
    }
}

//--------------------Validar usuario y contraseña--------------------//
export const loginWithEmailPassAsync = (email, password) => {

    return (dispatch) => {
        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    dispatch(loginSincronico(user.email, user.password))
                    console.log('Usuario autorizado');
                }) 
                .catch(error => {
                    console.warn(error, 'No autorizado');
                })
    }
}


export const loginSincronico = (email, password) => {
    return {
        type: typesLogin.login,
        payload: {
            email,
            password
        }
    }
}