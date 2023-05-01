import { GET_ORDER } from "../types";

export const getOrder = (cart, totalPrice) => {
  return {
    type: GET_ORDER,
    payload: { cart, totalPrice },
  };
};
