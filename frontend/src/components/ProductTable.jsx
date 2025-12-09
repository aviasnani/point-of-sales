import React from "react";

export default function ProductTable({ products }) {
  return (
    <div className="card">
      <h3>Products</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Price</th><th>Stock</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length>0 ? products.map(p=>(
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button className="primary" style={{marginRight:"5px"}}>Edit</button>
                <button className="danger">Delete</button>
              </td>
            </tr>
          )): <tr><td colSpan="5" style={{textAlign:"center"}}>No Products</td></tr>}
        </tbody>
      </table>
    </div>
  );
}