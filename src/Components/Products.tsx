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

function Products(props): number {
  return (
    <>
      {Object.entries(products).map(([phone, price], index) => (
        <p key={index}>
          {phone} price : {price} with tax :{calculateTax(price, props.tax)}
        </p>
      ))}
    </>
  );
}

function calculateTax(price: number, tax: number): number {
  return (price / 100) * tax + price;
}

export function clickOnButton() {
  console.log("work");
}

export function InputRefresh() {
  let [name, setName] = useState("hallo world");

  function changeName(e) {
    setName(e.target.value);
    console.log(name);
  }

  return (
    <>
      <button onClick={clickOnButton}>{name}</button>
      <input type="text" onInput={changeName} />
    </>
  );
}

export default Products;
