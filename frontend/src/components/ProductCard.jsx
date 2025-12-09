import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <input type="number" min="1" value={qty} onChange={e => setQty(Number(e.target.value))} />
      <button onClick={() => addToCart(product, qty)}>Add to Cart</button>
    </div>
  );
}