import Delivery from "../../assets/svg/Delivery";
import Dispatche from "../../assets/svg/Dispatche";
import Exchange from "../../Exchange";
import Replacement from "../../assets/svg/Replacement";
import Warranty from "../../assets/svg/Warranty";
import { useParams } from "react-router-dom";
import products from "../../data/data";
import type { Product } from "../../types/interface/common";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const product = products.find(
    (product: Product) => product.id === Number(id)
  );
  const [selectedImage, setSelectedImage] = useState<string>(
    product!.images[0]
  );
  const [selectedPlug, setSelectedPlug] = useState<string>(
    product!.plugOptions[0]
  );


  const AddToCartHandler = ()=>{
    dispatch(cartActions.addItemToCart({
      id: product!.id,
      name: product!.name,
      price: product!.price,
      image: product!.images[0]
    }))
  }

  return (
    <div className="my-5">
      <div className="w-full bg-white shadow-[0_0_20px_#C4C4C4] rounded-3xl overflow-hidden flex gap-10 p-10">
        <div className="w-7/12 flex justify-between gap-10">
          <div className="flex flex-col gap-5 w-[15%] overflow-y-scroll relative hide-scrollbar items-center">
            {/* <div className="sticky top-0 bg-gradient-to-b from-red-600 from-50% to-blue-700 min-h-10 min-w-full"></div> */}
            {product?.images.map((imageURL: string) => (
              <img
                className="w-20 rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(imageURL)}
                src={imageURL}
                alt=""
              />
            ))}

            {/* <div className="sticky -bottom-1 bg-gradient-to-t from-white to-transparent min-h-20 min-w-full"></div> */}
          </div>
          <div className=" aspect-square w-[80%]">
            <img
              className="object-cover rounded-2xl"
              src={selectedImage}
              alt=""
            />
          </div>
        </div>
        <div className="w-5/12">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            {product?.name}
          </h2>
          <p className="text-gray-500">{product?.type}</p>
          {product?.isBestSeller && (
            <div className="text-sm flex gap-2 mt-4">
              <div className="bg-amber-200 w-fit px-3 rounded-2xl text-xs">
                #1 BEST SELLER
              </div>
              <p className="text-gray-500">
                in Best Headphones Under Rs. 2,000
              </p>
            </div>
          )}
          <div className="bg-gray-300 min-w-full h-[1px] my-6"></div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-end">
              <span className="text-xl text-blue-700 font-bold">
                ₹ {product?.price.toLocaleString('en-IN')}
              </span>
              <span className="text-gray-500 line-through">
                MRP: ₹ {product?.oldPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-gray-700 flex gap-1 items-center">
              <span>⭐</span>
              <span className="text-sm">
                {product?.rating} ({product?.reviews})
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-gray-500">
            <span>
              EMI from <span className="font-semibold">{product?.emi}</span>
            </span>
            <span className="text-xs">Includes GST of ₹ 1,373</span>
            <span>{product?.stockInfo}</span>
          </div>
          <div className="my-5">
            <p>Plug: {selectedPlug}</p>
            <div className="flex gap-3 [&_button]:border [&_button]:px-5 [&_button]:py-3 [&_button]:rounded-4xl text-gray-600">
              {product!.plugOptions!.length > 0 &&
                product!.plugOptions.map((plug: string) => (
                  <button
                    onClick={() => setSelectedPlug(plug)}
                    className={`cursor-pointer ${
                      selectedPlug === plug ? "border-black" : "border-gray-200"
                    }`}
                  >
                    {plug}
                  </button>
                ))}
            </div>
          </div>
          <button
            className="bg-blue-700 text-sm text-white font-semibold w-full my-7 p-4 rounded-4xl hover:bg-gray-700 cursor-pointer"
            onClick={AddToCartHandler}
          >
            ADD TO CART
          </button>
          <div className="text-center text-sm underline font-semibold cursor-pointer hover:no-underline text-gray-600">
            <p>Confused? Talk to a Headphone Guru</p>
          </div>
          <div className="text-sm font-medium text-gray-500 flex gap-5  mt-4">
            <div className="w-1/2 bg-gray-50 shadow-md rounded-2xl p-2 ">
              <p className="text-gray-700">DELIVERY</p>
              <ul className="text-xs">
                <li className="flex gap-2">
                  <Dispatche />
                  Dispatches in 24-48 hours
                </li>
                <li className="flex gap-2">
                  <Delivery />
                  Delivery By:
                  <br /> Sat, Sept 13th - Mon, Sept 15th Cash On Delivery
                  Available
                </li>
              </ul>
            </div>
            <div className="w-1/2 bg-gray-50 shadow-md rounded-2xl p-2">
              <p className="text-gray-700">RETURNS & WARRANTY</p>
              <ul className="text-xs">
                <li className="flex gap-2">
                  <Replacement /> 7 Day Replacement Guarantee{" "}
                </li>
                <li className="flex gap-2">
                  <Exchange />7 Day Easy Exchange
                </li>
                <li className="flex gap-2">
                  <Warranty />1 Year Warranty{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
