import React, { useState } from "react";

export default function QuantityModal({ product, close, updateQuantity }) {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleConfirm = () => {
    updateQuantity(product.id, quantity);
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
        minWidth: "250px", display: "flex", flexDirection: "column", gap: "10px"
      }}>
        <h3>{product.name}</h3>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}