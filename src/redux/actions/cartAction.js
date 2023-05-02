import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TOTAL_PRICE,
  ADD_USER_INFO,
} from "../types";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (productId, inventory) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productId, inventory },
  };
};

export const addTotalPrice = (totalPrice) => {
  return {
    type: ADD_TOTAL_PRICE,
    payload: totalPrice,
  };
};

export const addUserInfo = (userInfo) => {
  return {
    type: ADD_USER_INFO,
    payload: userInfo,
  };
};
