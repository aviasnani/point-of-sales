import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import ProductModal from "./components/ProductModal";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar cart={cart} setCart={setCart} />
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {!selectedCategory && <Dashboard setSelectedCategory={setSelectedCategory} />}
        {selectedCategory && <Category
          category={selectedCategory}
          setModalProduct={setModalProduct}
        />}
      </div>

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          close={() => setModalProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}