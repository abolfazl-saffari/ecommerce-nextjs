import { GET_USER_INFO } from "../types";

export const getUserInfo = (name, lName, address, phone, deliveryDate) => {
  return {
    type: GET_USER_INFO,
    payload: { name, lName, address, phone, deliveryDate },
  };
};
