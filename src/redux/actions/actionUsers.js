import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesUsuarios } from "../types/types";

export const searchAsync = (search)=>{
    return async (dispatch) => {
        const traerUsuarios = collection(db, 'usuarios');
        console.log('lenght',search.length);
        const q = query(traerUsuarios, where('email', '>=', search), where('email', '<=', search + '~'))
        const datosUsuario = await getDocs(q);
        const usuario = [];
        console.log(usuario);
        datosUsuario.forEach((docu) => {
            usuario.push(docu.data());
        } )
        console.log(usuario);
        dispatch(searchSync(usuario));
    }
   
}

export const searchSync = (usuarioBuscar)=>{
    return{
        type: typesUsuarios.search,
        payload: usuarioBuscar
    }
}