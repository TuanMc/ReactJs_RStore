import { createStore, combineReducers } from "redux";
import { userAuthenticationReducer } from "../reducers/userAuthenticationReducers";
import { itemSelectReducer } from "../reducers/itemSelectReducer";
import { homeReducer } from "../reducers/homeReducers";
import { productDetailReducer } from "../reducers/productDetailReducer";

const reducers = combineReducers({
  itemSelectReducer,
  homeReducer,
  userAuthenticationReducer,
  productDetailReducer
});
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
