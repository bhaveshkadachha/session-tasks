function ProductItem() {
  return (
    <div className="bg-white min-h-[34rem] w-[22rem] relative">
      <div className="aspect-square w-full group ">
        <img
          src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-X-Oriveti-Blackbird-67.jpg?v=1742391175"
          alt=""
          className="absolute aspect-square w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <img
          src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-X-Oriveti-Blackbird-49.jpg?v=1742391158"
          alt=""
          className="absolute aspect-square w-full opacity-100 transition-opacity duration-500 group-hover:opacity-0"
        />x
      </div>

      <div className="p-5">
        <h3 className="uppercase font-semibold">
          Lypertek X Headphone Zone - PurePlay Z3
        </h3>
        <p className="text-sm ">True Wireless Earbuds</p>
        <div className="flex gap-3 my-2">
          <p className="text-indigo-600 font-semibold">₹4999</p>
          <p className=" text-gray-400 line-through">₹5999</p>
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
          <span>5.0</span>
          <span>(1000)</span>
        </div>
        <div className="absolute top-3 left-3 text-xs bg-blue-400 font-semibold px-2 py-0.5 rounded-lg text-white">
          New
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
