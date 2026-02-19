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

function Products({ tax, setTax }: { tax: number; setTax: Number }) {
  const [products, setProducts] = useState<ProductInterface[]>(initialProducts);
  const [newProductName, setNewProductName] = useState<string>("");
  const [newProductPrice, setNewProductPrice] = useState<number>("");

  const handleAddProduct = () => {
    if (!newProductName || !newProductPrice) {
      alert("Unesite podatke");
      return;
    }
    const newProduct = {
      id: products.length + 1,
      name: newProductName,
      price: newProductPrice,
    };
    setProducts([...products, newProduct]);
    setNewProductName("");
    setNewProductPrice("");
  };

  return (
    <>
      <div className="products">
        {products.map((product) => (
          <p key={product.id}>
            {product.name} price: {product.price} with tax:
            {calculateTax(product.price, tax).toFixed()}
          </p>
        ))}
      </div>

      <div className="addProductInp">
        <input
          className="addProduct"
          type="text"
          placeholder="Add Product"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          className="priceInp"
          type="number"
          placeholder="price"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(Number(e.target.value))}
        />
        <button className="addProductBtn" onClick={handleAddProduct}>
          add product
        </button>
      </div>

      <button className="deleteProductBtn" onClick={() => setProducts([])}>
        delete product
      </button>
      <button
        className="initialProducts"
        onClick={() => setProducts(initialProducts)}
      >
        {" "}
        initialProducts
      </button>
    </>
  );
}

function calculateTax(price: number, tax: number): number {
  return (price / 100) * tax + price;
}

export function RenderTax({ tax, setTax }) {
  return (
    <>
      <input
        className="setTexInp"
        type="number"
        placeholder="Unesite novu taksu"
        onChange={(e) =>
          setTax(e.target.value === "" ? 20 : Number(e.target.value))
        }
      />
    </>
  );
}

export default Products;
