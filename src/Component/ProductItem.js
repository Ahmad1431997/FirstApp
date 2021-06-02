import { ProductImage } from "../styles";

function ProductItem(props) {
  return (
    <div>
      <div>
        <ProductImage
          alt="product-img"
          // className="product-image"
          src={props.product.imag}
        />

        <h2> {props.product.name}</h2>
        <p> {props.product.price} KD</p>
      </div>
    </div>
  );
}

export default ProductItem;
