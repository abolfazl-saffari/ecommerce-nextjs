import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  products: productsReducer,
  product: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
