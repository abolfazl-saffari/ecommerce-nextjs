import {
  GET_PRODUCTS,
  DECREASING_PRODUCT_INVENTORY,
  REMOVE_PRODUCT,
  SORT_PRODUCTS_ALPHABETICALLY,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_INV_AND_PRICE,
} from "../types";

const initialState = {
  products: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case DECREASING_PRODUCT_INVENTORY:
      const updatedProductsUPInventory = state.products.map((product) =>
        product.id === payload.id
          ? { ...product, inventory: action.payload.inventory }
          : { ...product }
      );

      return { ...state, products: updatedProductsUPInventory };
    case REMOVE_PRODUCT:
      const updatedProductsRem = state.products.filter(
        (product) => product.id !== action.payload
      );

      return { ...state, products: updatedProductsRem };
    case ADD_PRODUCT:
      const updatedProductsAdd = state.products.concat(action.payload);

      return { ...state, products: updatedProductsAdd };
    case UPDATE_PRODUCT:
      const updatedProductsUPProduct = state.products.map((product) =>
        product.id === payload.id ? { ...payload } : { ...product }
      );

      return { ...state, products: updatedProductsUPProduct };
    case UPDATE_PRODUCT_INV_AND_PRICE:
      const updatedProductsInvAndPrice = state.products.map((product) =>
        product.id === payload.id ? { ...payload } : { ...product }
      );

      return { ...state, products: updatedProductsInvAndPrice };
    case SORT_PRODUCTS_ALPHABETICALLY:
      const collator = new Intl.Collator("fa");
      const sortAlphabetically = state.products.sort((a, b) => {
        if (action.payload) {
          return collator.compare(a.category, b.category);
        }
        return collator.compare(b.category, a.category);
      });

      return {
        ...state,
        products: sortAlphabetically,
      };
    default:
      return state;
  }
};
