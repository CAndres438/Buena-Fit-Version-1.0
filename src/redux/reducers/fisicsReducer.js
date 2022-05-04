import { typesFisicos } from "../types/types";

const initialState = {
    fisics: []
}

export const fisicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesFisicos.add:
            return {
                fisics: [action.payload]
            }
            case typesFisicos.addFormik: 
                return {
                    fisics: [action.payload]
                }

            case typesFisicos.list: 
                return {
                    fisics: [...action.payload]
                }
                case typesFisicos.edit:
                    return {
                        ...state
                    }
            case typesFisicos.delete:
                return {
                    fisics: state.fisics.filter(p => p.nombre !== action.payload)
                }
                
            default:
                return state;
    }
}