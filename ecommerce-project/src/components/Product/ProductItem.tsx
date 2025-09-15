import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/interface/common";

function ProductItem({ product }: { product: Product }) {
  const navigatge = useNavigate()
  const clickHandler = ()=>{
    navigatge('/product/'+product.id)
  }

  return (
    <div className="bg-white min-h-[34rem] w-[22rem] relative rounded-xl overflow-hidden">
      <div className="aspect-square w-full group cursor-pointer" onClick={clickHandler}>
        <img
          src={product.images[0]}
          alt=""
          className="absolute aspect-square w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <img
          src={product.images[1]}
          alt=""
          className="absolute aspect-square w-full opacity-100 transition-opacity duration-500 group-hover:opacity-0"
        />
      </div>

      <div className="p-5">
        <h3 className="uppercase font-semibold">
          {product.name}
        </h3>
        <p className="text-sm ">{product.type}</p>
        <div className="flex gap-3 my-2">
          <p className="text-indigo-600 font-semibold">₹ {product.price.toLocaleString('en-IN')}</p>
          <p className=" text-gray-400 line-through">₹ {product.oldPrice.toLocaleString('en-IN')}</p>
        </div>
        <div className="flex gap-2 text-xs my-2">
          <span>🥜</span>
          <span>🌱</span>
          <span>🥇</span>
          <span>⚖️</span>
          <span>🍿</span>
          <span>💪🏻</span>
        </div>
        <div className="flex gap-1 text-sm">
          <span>⭐</span>
          <span>{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        {product.isBestSeller && <div className="absolute top-3 left-3 text-xs bg-yellow-200 px-2 py-0.5 rounded-lg ">
          BEST SELLER
        </div>}
      </div>
    </div>
  );
}

export default ProductItem;
