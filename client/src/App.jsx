import { useEffect, useState } from "react";
import Product from "./components/Product"
import axios from 'axios';
import "./App.css";
const host = "http://localhost:4001";

function App() {
  const [productsDetail, setProductsDetail] = useState([]);

  function fetchProductsDetail() {
    const data = axios.get(host + "/products").then(
      res => {
        setProductsDetail(res.data.data)
      }
    )
  }

  useEffect(fetchProductsDetail, [])

  function deleteProduct(id) {
    axios.delete(host + `/products/${id}`).then(
      fetchProductsDetail()
    )
    
    return;
  }

  const productsList = productsDetail.map(product => {
    return (
      <Product data={product} deleteProduct={deleteProduct}/>
    )
  })

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
      </div>
      <div className="product-list">
        {productsList}
      </div>
    </div>
  );
}

export default App;
