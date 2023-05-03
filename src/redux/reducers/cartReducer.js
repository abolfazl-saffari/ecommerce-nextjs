import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TOTAL_PRICE,
  ADD_USER_INFO,
  CLEAR_CART,
} from "../types";

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  userInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state.cart.find((item) => item.id === action.payload.id));
      console.log(action.payload.id);

      let updatedStoreAdd;
      if (state.cart.find((item) => item.id === action.payload.id)) {
        updatedStoreAdd = state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                inventory: +item.inventory + +action.payload.inventory,
              }
            : { ...item }
        );
      } else {
        updatedStoreAdd = state.cart.concat(action.payload);
      }

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
    case CLEAR_CART:
      return {
        cart: [],
        totalItems: 0,
        totalPrice: 0,
        userInfo: {},
      };
    case ADD_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case ADD_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};
