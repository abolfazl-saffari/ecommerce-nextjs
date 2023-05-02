import { GET_USER_INFO } from "../types";

const initialState = {
  name: "",
  lName: "",
  address: "",
  phone: "",
  deliveryDate: "",
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        name: action.payload.name,
        lName: action.payload.lName,
        address: action.payload.address,
        phone: action.payload.phone,
        deliveryDate: action.payload.deliveryDate,
      };
    default:
      return state;
  }
};
