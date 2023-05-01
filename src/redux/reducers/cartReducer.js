import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const initialState = {
  cart: [],
  totalItems: 0,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedStoreAdd = state.cart.concat(action.payload);
      const totalAdd = state.cart.length;
      return {
        ...state,
        cart: updatedStoreAdd,
        totalItems: totalAdd,
      };
    case REMOVE_FROM_CART:
      const updatedCartRem = state.cart.filter(
        (product) => product.id !== action.payload
      );
      const totalRem = state.cart.length;

      return {
        ...state,
        cart: updatedCartRem,
        totalItems: totalRem,
      };
    default:
      return state;
  }
};
