import products from "../products";
import ProductItem from "./ProductItem";
import { List } from "../styles";

function ProductList() {
  const productsArray = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <List> {productsArray}</List>; //<div className="list">{newArray}</div>;
}

export default ProductList;
