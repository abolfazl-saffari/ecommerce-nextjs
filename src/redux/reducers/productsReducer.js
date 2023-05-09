import { GET_PRODUCTS, DECREASING_PRODUCT_INVENTORY } from "../types";

const initialState = {
  products: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case DECREASING_PRODUCT_INVENTORY:
      const updatedProducts = state.products.map((product) =>
        product.id === payload.id
          ? { ...product, inventory: action.payload.inventory }
          : { ...product }
      );
      return { ...state, product: updatedProducts };
    default:
      return state;
  }
};
