import { useDispatch } from "react-redux";
import { cartActions, type CartItem } from "../../store/cart-slice";
import products from '../../data/data'
import type { Product } from "../../types/interface/common";
import Delete from "../../assets/svg/Delete";

function CartItem({ cartItemData }: { cartItemData: CartItem }) {
  const product = products.find((product: Product)=>product.id === cartItemData.id)
  const dispatch = useDispatch()

  const removeProductHandler = ()=>{
    dispatch(cartActions.removeProductFromCart(cartItemData.id))
  } 
  
  const increaseProductQuality = ()=>{
    dispatch(cartActions.addItemToCart({
      id: product!.id,
      name: product!.name,
      price: product!.price,
      image: product!.images[0]
    }))
  }
  const decreaseProductQuality = ()=>{
        dispatch(cartActions.removeItemFromCart(cartItemData.id))

  }

  return (
    <div className="flex justify-between gap-3">
      <div className="h-20 aspect-square">
        <img src={cartItemData.image} className="w-full" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between gap-0.5">
          <p className="text-sm text-gray-600">{cartItemData.name}</p>
          <button className="cursor-pointer" onClick={removeProductHandler}><Delete /></button>
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-2 border border-gray-500 w-fit rounded-3xl py-1 [&_button]:cursor-pointer p-1">
            <button className="px-2" onClick={decreaseProductQuality}>-</button>
            <p>{cartItemData.quantity}</p>
            <button className="px-2" onClick={increaseProductQuality}>+</button>
          </div>
          <div>
            <p className="text-nowrap text-sm text-gray-600">{`₹ ${cartItemData.totalPrice.toLocaleString(
              "en-IN"
            )}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
