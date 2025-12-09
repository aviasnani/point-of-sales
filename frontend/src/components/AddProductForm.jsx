import React, { useState } from "react";

export default function AddProductForm({ addProduct }) {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [stock,setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name||!price||!stock) return;
    addProduct({id:Date.now(), name, price, stock});
    setName(""); setPrice(""); setStock("");
  }

  return (
    <div className="card">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit} style={{display:"grid", gap:"10px"}}>
        <input type="text" placeholder="Product Name" value={name} onChange={e=>setName(e.target.value)}/>
        <input type="number" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)}/>
        <input type="number" placeholder="Stock" value={stock} onChange={e=>setStock(e.target.value)}/>
        <button className="primary" type="submit">Add Product</button>
      </form>
    </div>
  );
}