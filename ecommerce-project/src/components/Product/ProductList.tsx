import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 py-5 z-0">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default ProductList;
