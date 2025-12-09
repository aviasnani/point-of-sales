import React from "react";

export default function Dashboard({ setSelectedCategory }) {
  const categories = [
    "Bedding", "Incense", "Lamps", "Mats",
    "Jewellery", "Frames", "Tipperary", "Newgrange", "Furniture"
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px"
    }}>
      {categories.map(cat => (
        <div
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          style={{
            height: "120px", background: "#51CF66", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: "bold", borderRadius: "12px", cursor: "pointer"
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}