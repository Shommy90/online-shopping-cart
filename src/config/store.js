import { createStore, combineReducers } from "redux";
import { root } from "postcss";
import cartReducer from "../components/cart/reducer";

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
