import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  DECREASING_PRODUCT_INVENTORY,
  ERROR_DECREASING_PRODUCT_INVENTORY,
} from "../types";
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

export const decreasingProductInventory =
  (productId, remainingItems) => async (dispatch) => {
    try {
      const res = await axios.patch(
        `http://localhost:3004/products/${productId}`,
        {
          inventory: remainingItems,
        }
      );
      dispatch({
        type: DECREASING_PRODUCT_INVENTORY,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: ERROR_DECREASING_PRODUCT_INVENTORY,
        payload: console.log(e),
      });
    }
  };
