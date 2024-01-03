import React from "react";

const Product = (props) => {
  const { product } = props;
  return (
    <div className="card">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
