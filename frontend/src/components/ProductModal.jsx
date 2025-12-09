import React, { useState } from "react";

export default function ProductModal({ product, close, addToCart }) {
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!price) return;
    addToCart({ ...product, price: parseFloat(price), quantity: 1 });
    close();
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)", display: "flex",
      justifyContent: "center", alignItems: "center", zIndex: 1000
    }}>
      <div style={{
        background: "white", padding: "20px", borderRadius: "12px",
        minWidth: "300px", display: "flex", flexDirection: "column", gap: "10px"
      }}>
        <h3>{product.name}</h3>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleAdd}>Add</button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}