import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import ProductTable from "../components/ProductTable";
import AddProductForm from "../components/AddProductForm";

export default function Products() {
  const [products, setProducts] = useState([
    {id:1,name:"Laptop",price:1200,stock:5},
    {id:2,name:"Mouse",price:25,stock:20}
  ]);

  const addProduct = (product) => setProducts([...products, product]);

  return (
    <DefaultLayout title="Products">
      <AddProductForm addProduct={addProduct} />
      <ProductTable products={products} />
    </DefaultLayout>
  );
}