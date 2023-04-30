import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  products: productsReducer,
  product: productReducer,
  categories: categoriesReducer,
});
