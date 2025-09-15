import { useDispatch, useSelector } from "react-redux";
import { modelActions } from "../../store/model-slice";
import type { State } from "../../store/store";
import type { CartItem as CartItemType } from "../../store/cart-slice";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Cross from "../../assets/svg/Cross";

function Cart() {
  const cartItems = useSelector((state: State) => state.cart.cartItems);
  const tottalAmount = cartItems.reduce((totalAmt: number, cartItem: CartItemType)=>totalAmt+cartItem.totalPrice,0)
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-96 h-screen p-5"
    >
      {cartItems && cartItems.length === 0 && (
        <div className="w-full h-full flex flex-col gap-3 justify-center items-center relative">
          <button
              className="cursor-pointer absolute right-0 top-0"
              onClick={() => dispatch(modelActions.onClose())}
            >
              <Cross />
            </button>
          <span className="font-medium">Your cart is empty</span> <Link className="text-sm underline" to='/' onClick={()=>dispatch(modelActions.onClose())}>Continue Shopping</Link>
        </div>
      )}
      {cartItems && cartItems.length > 0 && (
        <div className="relative h-full">
          <div className="flex justify-between border-b py-2">
            <p>Your Cart </p>
            <button
              className="cursor-pointer"
              onClick={() => dispatch(modelActions.onClose())}
            >
              <Cross />
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-4 h-[70%] overflow-y-scroll hide-scrollbar">
            {cartItems.map((cartItem: CartItemType) => (
              <CartItem cartItemData={cartItem} />
            ))}
          </div>
          <div className="absolute bottom-0 w-full h-24 border-t py-2 text-sm">
            <div className="flex justify-between"><span>Shipping</span><span >FREE</span></div>
            <div className="flex justify-between font-semibold"><span>Total</span><span>₹ {tottalAmount.toLocaleString('en-IN')}</span></div>
            <button className="w-full bg-blue-700 py-2 text-white rounded-full curp mt-3">CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
