import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [productDetail, setProductDetail] = useState([]);

  const getProductDetail = async () => {
    const result = await axios.get("http://localhost:4001/products");
    console.log(result.data.data);
    setProductDetail(result.data.data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  const deleteProductDetail = async (index) => {
    await axios
      .delete(`http://localhost:4001/products/${index}`)
      .then(getProductDetail);
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      {productDetail.map((product, index) => {
        return (
          <div key={index} className="product-list">
            <div className="product">
              <div className="product-preview">
                <img
                  src={product.image}
                  alt={product.name}
                  width="350"
                  height="350"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name}</h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description:{product.description}</p>
              </div>

              <button
                className="delete-button"
                onClick={() => {
                  return deleteProductDetail(product.id);
                }}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
