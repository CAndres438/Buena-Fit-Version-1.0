import { typesShoppingCart } from "../types/types";

export const initialState = {
  cart: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case typesShoppingCart.add:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case typesShoppingCart.list:
      return {
        cart: [...state.payload],
      };

    //
    case typesShoppingCart.remove:
      console.log("STATE CART Y ACTION CODIGO ", state.cart, action.payload);
      const index = state.cart.findIndex(
        (cartItem) => cartItem.codigo === action.payload
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove product id: ${action.payload}
                as its not in basket!`);
      }
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};
