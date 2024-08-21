import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMore = () => {
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);
  async function getProducts() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${skip}`
    );
    const data = await response.json();
    setProducts((prevProducts) => [...prevProducts, ...data.products]);
  }

  useEffect(() => {
    getProducts();
  }, [skip]);
  useEffect(() => {
    if (products.length === 100) setDisableBtn(true);
  }, [products]);
  return (
    <>
      <div className="product-container">
        {products.map((item, idx) => (
          <div className="product-card" key={idx}>
            <img src={item.thumbnail} alt="" />
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
            <div className="price">${item.price}</div>
          </div>
        ))}
      </div>
      {disableBtn ? (
        <div className="button-container">
          <h1>{`${products.length} Loaded. No more products available`}</h1>
        </div>
      ) : (
        <div className="button-container">
          <button disabled={disableBtn} onClick={() => setSkip(skip + 20)}>
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default LoadMore;
