import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";

export default function Sales() {
  const [sales, setSales] = useState([
    { id: 1, product: "Laptop", quantity: 2, total: 2400 },
    { id: 2, product: "Mouse", quantity: 5, total: 125 }
  ]);

  return (
    <DefaultLayout title="Sales">
      <div className="card">
        <h2>Sales Records</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.product}</td>
                <td>{s.quantity}</td>
                <td>${s.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
}