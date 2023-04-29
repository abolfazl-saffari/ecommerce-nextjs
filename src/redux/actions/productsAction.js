import { GET_PRODUCTS, PRODUCTS_ERROR } from "../types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3004/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(e),
    });
  }
};
