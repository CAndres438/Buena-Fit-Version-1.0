import { typesModal } from "../types/types";

const initialState = {
    modal: []
}

export const modalReducer = (state = initialState, action) => {

    switch (action.type) {
     
        case typesModal.selected:
            return {
                 modal: action.payload
              }
        default:
            return state;
    }
}