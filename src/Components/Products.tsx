import React from "react";
import { useState } from "react";

interface ProductInterface {
  [key: string]: number;
}

const products: ProductInterface = {
  "iphone 13": 1000,
  "iphone 15": 1300,
  "samsung s 24 ultra": 1200,
};

function Products({ tax }) {
  return (
    <>
      {Object.entries(products).map(([phone, price], index) => (
        <p key={index}>
          {phone} price : {price} with tax :{calculateTax(price, tax)}
        </p>
      ))}
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
        type="text"
        placeholder="Unesite novu taksu"
        onChange={(e) => setTax(Number(e.target.value))}
      />
    </>
  );
}

export default Products;
