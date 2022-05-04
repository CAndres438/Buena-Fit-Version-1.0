import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesRegister } from "../types/types";

export const registerAsync = (email, pass, name, role) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
            .then(async ({user}) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(addRegisterUserFirestoreAsync(email, pass, name, role, user.uid))
            })
            .catch(error => {
                console.warn(error, 'No autorizado');
            })
    }
}

//-------------agregar---------------//
export const addRegisterUserFirestoreAsync = (email, pass, name, role, uid) => {

    if(!email){
        email='';
    }
    if(!pass){
        pass='';
    }
    if(!name){
        name='';
    }
    if(!role || role === ''){
        role='usuario';
    }

    let user = {
        email: email,
        password: pass,
        nombre: name,
        role: role
    }
    return async (dispatch) => {
        // Add a new document in collection "cities" with "LA" add id
        await setDoc(doc(db, "usuarios/", uid), user);

    }
}   

//-----------------------------Sync----------------------------//
export const registerSync = (email, pass, name) => {
    return {
        type: typesRegister.register,
        payload: {
            email,
            pass,
            name
        }
    }
}