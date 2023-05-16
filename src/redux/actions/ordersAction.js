import {
  GET_ORDERS,
  ORDERS_ERROR,
  ADD_ORDER,
  ADD_ORDER_ERROR,
  ORDER_DELIVERED,
  ORDER_DELIVERED_ERROR,
} from "../types";
import axios from "axios";

export const addOrder = (order) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3004/orders", { ...order });
    dispatch({
      type: ADD_ORDER,
      payload: res.data,
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

export const orderDelivered = (id) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:3004/orders/${id}`, {
      OrderDelivered: true,
    });
    dispatch({
      type: ORDER_DELIVERED,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: ORDER_DELIVERED_ERROR,
      payload: console.log(e),
    });
  }
};
