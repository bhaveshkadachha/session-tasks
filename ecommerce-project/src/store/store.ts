import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./model-slice";
import cartReducer, { type CartState } from "./cart-slice";

export interface State {
  model: { isModelOpen: boolean; onOpen: () => void; onClose: () => void };
  cart: CartState
}

const store = configureStore({
  reducer: {
    model: modelReducer,
    cart: cartReducer
  },
});

export default store;
