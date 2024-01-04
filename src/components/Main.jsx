import React from "react";
import Product from "./Product";

const Main = (props) => {
  const { cartItems, products, onAdd, onRemove } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            onAdd={onAdd}
            onRemove={onRemove}
            key={product.id}
            product={product}
            item={cartItems.find((x) => x.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
