import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// 1) หา API ก่อนว่าต้องใช้ API อันไหน
// GET http://localhost:4001/products

// 2) สร้าง Request ไปหา Server (Axios)
// - ติดตั้ง axios (install axios)
// - import axios
// - execute axios (useEffect, useState, async, ...)

// 3) นำข้อมูลจาก Response มา Render

function App() {
  const [products, setProducts] = useState([]);

  // 2.1) Declare variable getProducts เพื่อเอาไว้ทำ Request
  const getProducts = async () => {
    const result = await axios.get("http://localhost:4001/products");
    setProducts(result.data.data);
  };

  // 2.2) Execute getProducts แต่ว่าต้องใส่ใน useEffect เพื่อให้สร้าง Request
  // ทำแค่ครั้งแรกครั้งเดียวตอนที่ Component render
  useEffect(() => {
    getProducts();
  }, []);

  // 4) Declare variable สำหรับสร้างคำสั่งให้ปุ่มลบ Products
  const deleteProductData = async (id) => {
    await axios
      .delete(`http://localhost:4001/products/${id}`)
      .then(getProducts);
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      <div className="product-list">
        {/* นำข้อมูลจาก Response มา Render */}

        {products.map((data, index) => {
          return (
            <div key={index} className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/350/350"
                  alt="some product"
                  width="350"
                  height="350"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {data.name}</h1>
                <h2>Product price: {data.price}</h2>
                <p>Product image: {data.image}</p>
                <p>Product description: {data.description}</p>
              </div>

              {/* 5) ตั้งค่าให้ปุ่มลบ Products */}
              <button
                onClick={() => {
                  deleteProductData(data.id);
                }}
                className="delete-button"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
