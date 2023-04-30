import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productReducer from "./ProductReducer";

export default combineReducers({
  products: productsReducer,
  product: productReducer,
});
