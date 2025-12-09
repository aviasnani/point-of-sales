import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handlePayment = () => {
    alert(`Paid ${total} via ${paymentMethod}`);
    clearCart();
  };

  if (cart.length === 0) return <div>
    <h2>Cart is empty</h2>
    <Link to="/dashboard">Go back to Dashboard</Link>
  </div>;

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.map(p => <div key={p.id}>{p.name} x {p.quantity} = ${p.price * p.quantity}</div>)}
      <p>Total: ${total}</p>

      <div>
        <label>
          <input type="radio" checked={paymentMethod==="cash"} onChange={()=>setPaymentMethod("cash")} /> Cash
        </label>
        <label>
          <input type="radio" checked={paymentMethod==="card"} onChange={()=>setPaymentMethod("card")} /> Card
        </label>
      </div>

      <button onClick={handlePayment}>Complete Payment</button>
    </div>
  );
}