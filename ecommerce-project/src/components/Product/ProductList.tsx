import ProductItem from "./ProductItem";
import type { Product } from "../../types/interface/common";
import products from "../../data/data";

function ProductList() {

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 py-5 z-0">
        {
          products.map((product:Product)=><ProductItem product={product} />)
        }
      </div>
    </div>
  );
}

export default ProductList;
