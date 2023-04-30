import { GET_PRODUCT, PRODUCT_ERROR } from "../types";
import axios from "axios";

export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3004/products/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: console.log(e),
    });
  }
};
