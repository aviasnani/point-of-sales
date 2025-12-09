import React, { useState } from "react";
import QuantityModal from "./QuantityModal";

export default function Sidebar({ cart, setCart }) {
  const [modalProduct, setModalProduct] = useState(null);

  const updateQuantity = (id, quantity) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity, price: item.price * quantity } : item
    ));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div style={{
      width: "250px", background: "#333", color: "white",
      display: "flex", flexDirection: "column", padding: "10px"
    }}>
      <h2>Cart</h2>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {cart.map(item => (
          <div key={item.id} style={{
            background: "#555", padding: "10px", borderRadius: "8px",
            marginBottom: "10px", display: "flex", flexDirection: "column"
          }}>
            <span>{item.name}</span>
            <span>Price: ${item.price}</span>
            <button onClick={() => setModalProduct(item)}>Quantity</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total: ${total}</h3>
      <div style={{ marginTop: "10px" }}>
        <h3>Payment</h3>
        <button style={{ marginRight: "10px" }}>Cash</button>
        <button>Card</button>
      </div>

      {modalProduct && (
        <QuantityModal
          product={modalProduct}
          close={() => setModalProduct(null)}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}