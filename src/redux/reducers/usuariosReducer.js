import { typesUsuarios } from "../types/types";

export const usuariosReducer = (state= {}, action) => {
    switch (action.type) {
        case typesUsuarios.search:
            return {
                usuarios: action.payload
            }
        default:
            return state;
    }
}