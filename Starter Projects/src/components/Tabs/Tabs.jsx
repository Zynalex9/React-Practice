import React, { useState } from "react";
import "./tabs.css";
const Tabs = ({ tabsContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="wrapper">
      <div className="heading-container">
        {tabsContent.map((tab, index) => (
          <h3
            onClick={() => setCurrentIndex(index)}
            className={`heading ${currentIndex === index ? "active": " "}`}
            key={index}
          >
            {tab.title}
          </h3>
        ))}
      </div>
      <div className="content">
        <p>{tabsContent[currentIndex].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
