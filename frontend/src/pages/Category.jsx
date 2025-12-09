import React from "react";
import { productsData } from "../data/productsData";

export default function Category({ category, setModalProduct }) {
  const products = productsData[category] || [];

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>{category}</h2>
      <div style={{
        diMsplay: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px"
      }}>
        {products.map(p => (
          <div
            key={p.id}
            onClick={() => setModalProduct(p)}
            style={{
              height: "120px", background: "#51CF66", color: "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: "bold", borderRadius: "12px", cursor: "pointer"
            }}
          >
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}