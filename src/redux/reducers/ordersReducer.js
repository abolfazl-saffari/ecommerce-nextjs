import { GET_ORDERS, ADD_ORDER, ORDER_DELIVERED } from "../types";

const initialState = {
  orders: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, orders: action.payload };
    case ADD_ORDER:
      const updatedOrdersAdd = state.orders.concat(action.payload);
      return { ...state, orders: updatedOrdersAdd };
    case ORDER_DELIVERED: {
      const updatedOrdersDel = state.orders.map((order) =>
        order.id === action.payload ? { ...order, OrderDelivered: true } : order
      );
      return { ...state, orders: updatedOrdersDel };
    }
    default:
      return state;
  }
};
