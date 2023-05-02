import { GET_ORDERS, ADD_ORDER } from "../types";

const initialState = {
  orders: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, orders: action.payload };
    case ADD_ORDER:
      const updatedOrders = state.orders.concat(action.payload);
      return { ...state, orders: updatedOrders };
    default:
      return state;
  }
};
