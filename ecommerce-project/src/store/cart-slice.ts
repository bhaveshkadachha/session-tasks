import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  image: string
  totalPrice: number;
  price: number;
  quantity: number;
}

interface payloadTypeForAddItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  cartChange: boolean;
}
interface CartReducerAction {
  type: string;
  payload: payloadTypeForAddItem | number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    cartChange: false,
  },
  reducers: {
    addItemToCart(state: CartState, action: CartReducerAction) {
      const newItem: CartItem = action.payload as CartItem;
      const existingItem: CartItem | undefined = state.cartItems.find(
        (cartItem: CartItem) => cartItem.id === newItem.id
      );

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.cartChange = true;
      state.totalQuantity++;
    },
    removeItemFromCart(state: CartState, action: CartReducerAction) {
      const id: number = action.payload as number;
      const existingItem: CartItem = state.cartItems.find(
        (cartItem: CartItem) => cartItem.id === Number(id)
      ) as CartItem;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem: CartItem) => cartItem.id !== existingItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.cartChange = true;
    },
    removeProductFromCart(state: CartState, action: CartReducerAction) {
      const id: number = action.payload as number;
      const removedProduct = state.cartItems.find((cartItem: CartItem)=>cartItem.id === id)
      state.totalQuantity -= removedProduct!.quantity
      state.cartItems = state.cartItems.filter(
          (cartItem: CartItem) => cartItem.id !== id
        );
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
