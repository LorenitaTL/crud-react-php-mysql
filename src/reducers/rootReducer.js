import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { uiReducer } from "./uiReducer";
export const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  ui: uiReducer,
});
