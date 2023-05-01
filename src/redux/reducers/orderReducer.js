import { GET_ORDER } from "../types";

const initialState = {
  cart: [],
  totalPrice: 0,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        cart: action.payload.cart,
        totalPrice: action.payload.totalPrice,
      };
    default:
      return state;
  }
};
