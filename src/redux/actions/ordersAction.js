import { GET_ORDERS, ORDERS_ERROR, ADD_ORDER, ADD_ORDER_ERROR } from "../types";
import axios from "axios";

export const addOrder = (order) => async (dispatch) => {
  try {
    await axios.post("http://localhost:3004/orders", { ...order });
    dispatch({
      type: ADD_ORDER,
    });
  } catch (e) {
    dispatch({
      type: ADD_ORDER_ERROR,
      payload: console.log(e),
    });
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3004/orders");
    dispatch({
      type: GET_ORDERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ORDERS_ERROR,
      payload: console.log(e),
    });
  }
};
