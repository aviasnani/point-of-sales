import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const addProduct = (product) => {
    const exists = cart.find(p => p.id === product.id);
    if (!exists) {
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity } : p));
  };

  const removeProduct = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const total = cart.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addProduct, updateQuantity, removeProduct, total, paymentMethod, setPaymentMethod }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);