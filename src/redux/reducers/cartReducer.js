import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TOTAL_PRICE } from "../types";

const initialState = {
  cart: [],
  totalItems: 0,
  loading: true,
  totalPrice: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedStoreAdd = state.cart.concat(action.payload);
      const totalAdd = state.totalItems + +action.payload.inventory;
      return {
        ...state,
        cart: updatedStoreAdd,
        totalItems: totalAdd,
      };
    case REMOVE_FROM_CART:
      const updatedCartRem = state.cart.filter(
        (product) => product.id !== action.payload.productId
      );
      const totalRem = state.totalItems - +action.payload.inventory;

      return {
        ...state,
        cart: updatedCartRem,
        totalItems: totalRem,
      };
    case ADD_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    default:
      return state;
  }
};
