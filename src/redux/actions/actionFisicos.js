import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesFisicos } from "../types/types";
 
export const editAsync = (nombre, fisico) => {
    console.log(nombre, fisico);
    return async (dispatch) => {
        const collectionTraer = collection(db, "fisicosDB");
        const q = query(collectionTraer, where("nombre","==", nombre ));
        const traerDatosQ = await getDocs(q);
        console.log(q, traerDatosQ);
        let id;
        traerDatosQ.forEach( async (docu) => {
            // console.log('DOCU', docu.id);
            id = docu.id;
        })
        // console.log(id);
        const documRef = doc(db, "fisicosDB", id)
        await updateDoc(documRef, fisico)
            .then(resp => {
                dispatch(listAsync());
                console.log(resp);
            })
            .catch((err) => console.log(err));
            dispatch(editSync(fisico));
    }
} 

export const editSync = (fisico) => {
    return {
        type: typesFisicos.editSync,
        payload: fisico
    }
}

//-------------------delete--------------------//
export const deleteAsync = (nombre) => {
    return async (dispatch) => {
        const collectionTraer = collection(db, "fisicosDB");
        const q = query(collectionTraer, where("nombre", "==", nombre));
        const traerDatosQ = await getDocs(q);
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(db, "fisicosDB", docum.id))
        }))
        dispatch(deleteSync(nombre));
        dispatch(listAsync());
    }
}

export const deleteSync = (fisico) => {
    return {
        type: typesFisicos.delete,
        payload: fisico
    }
}

//---------------listar----------------//
export const listAsync = () => {
    return async (dispatch) => {
        const collectionTraer = await getDocs(collection(db, "fisicosDB"));
        const fisicos = [];
        collectionTraer.forEach((doc) => {
            fisicos.push({
                ...doc.data()
            })
        })
        dispatch(listSync(fisicos));
    }
}

export const listSync = (fisicos) => {
    return {
        type: typesFisicos.list,
        payload: fisicos
    }
}

//-------------agregar---------------//
export const addAsync = (fisico) => {
    return (dispatch) => {
        addDoc(collection(db, "fisicosDB"), fisico)
            .then(resp => {
                dispatch(addSync(fisico));
                // dispatch(listAsync())
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addSync = (fisico) => {
    return {
        type: typesFisicos.add,
        payload: fisico
    }
}

// ------- Agregar desde formik ------- //
export const addFormikAsync = (product) => {
    console.log('Action addFormik ',product);
    return (dispatch) => {
        addDoc(collection(db, 'fisicosDB'), product)
            .then(resp => {
                console.log(resp);
                dispatch(addFormikSync(product))
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addFormikSync = (fisic) => {
    return {
        type: typesFisicos.addFormik,
        payload: fisic
    }
}