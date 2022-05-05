import { typesComments } from "../types/types";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {

    switch (action.type) {
     
        case typesComments.add:
            return {
                ...state,
               comments: [...state.comments, action.payload],
              }
        case typesComments.list: 
              console.log(state);
            return {
                  comments: [...action.payload]
              }
        default:
            return state;
    }
}