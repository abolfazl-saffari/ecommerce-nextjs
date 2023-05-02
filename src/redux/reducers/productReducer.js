import { GET_PRODUCT } from "../types";

const initialState = {
  product: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
