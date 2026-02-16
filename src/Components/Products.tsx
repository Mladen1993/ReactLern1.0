import React from "react";
import { useState } from "react";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
}

const initialProducts = [
  { id: 1, name: "iphone 13", price: 1000 },
  { id: 2, name: "iphone 15", price: 1300 },
  { id: 3, name: "samsung s 24 ultra", price: 1200 },
];

function Products({ tax }: { tax: number }) {
  const [products, setProducts] = useState<ProductInterface[]>(initialProducts);

  return (
    <>
      {products.map((product) => (
        <p key={product.id}>
          {product.name} price : {product.price} with tax :
          {calculateTax(product.price, tax)}
        </p>
      ))}
      <button onClick={() => setProducts([])}>delete product</button>
      <button onClick={() => setProducts(initialProducts)}>
        return product
      </button>
    </>
  );
}

function calculateTax(price: number, tax: number): number {
  return (price / 100) * tax + price;
}

export function RenderTax({ tax, setTax }) {
  console.log(tax);

  return (
    <>
      <button onClick={() => console.log(tax)}>TAX</button>
      <input
        type="number"
        placeholder="Unesite novu taksu"
        onChange={(e) => setTax(Number(e.target.value))}
      />
    </>
  );
}

export default Products;
