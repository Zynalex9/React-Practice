import React, { useEffect, useState } from "react";
import "./scroll.css";

function ScrollIndicator() {
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(0);
    async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
//   function handleScrollPercentage() {
//     const scrolledHeight = document.documentElement.scrollTop;
//     const totalHeight =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     setScrolled((scrolledHeight / totalHeight) * 100);
//   }
//   useEffect(() => {
//     window.addEventListener("scroll", handleScrollPercentage);

//     return () => {
//       window.removeEventListener("scroll", handleScrollPercentage);
//     };
//   }, []);

  return (
    <div>
      {/* <div
        className="progress-container"
        style={{ width: "100%", height: "20px", backgroundColor: "#f0f0f0" }}
      >
        <div
          className="progress-bar"
          style={{
            width: `${scrolled}%`,
            height: "20px",
            backgroundColor: "red",
            position: "fixed",
          }}
        ></div>
      </div> */}

      {products.length > 0 ? (
        products.map((product) => <p key={product.id}>{product.title}</p>)
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ScrollIndicator;
