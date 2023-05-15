import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  DECREASING_PRODUCT_INVENTORY,
  ERROR_DECREASING_PRODUCT_INVENTORY,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_ERROR,
  SORT_PRODUCTS_ALPHABETICALLY,
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_ERROR,
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

export const removeProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3004/products/${productId}`);
    dispatch({
      type: REMOVE_PRODUCT,
      payload: productId,
    });
  } catch (e) {
    dispatch({
      type: REMOVE_PRODUCT_ERROR,
      payload: console.log(e),
    });
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3004/products", {
      ...product,
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_ERROR,
      payload: console.log(e),
    });
  }
};

export const updateProduct =
  (
    productId,
    productTitle,
    productCategory,
    productSubcategory,
    productImage,
    productDescription
  ) =>
  async (dispatch) => {
    try {
      const res = await axios.patch(
        `http://localhost:3004/products/${productId}`,
        {
          title: productTitle,
          category: productCategory,
          subCategory: productSubcategory,
          image: productImage,
          description: productDescription,
        }
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: UPDATE_PRODUCT_ERROR,
        payload: console.log(e),
      });
    }
  };

export const sortProductsAlphabetically = (sortStatus) => {
  return {
    type: SORT_PRODUCTS_ALPHABETICALLY,
    payload: sortStatus,
  };
};
