import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [showChildren, setShowChildren] = useState(false);

  function handleClick() {
    setShowChildren(!showChildren);
  }

  return (
    <li>
      <div
        className="text"
        style={{
          display: "flex",
          gap: "10px",
          cursor: item.children ? "pointer" : "default",
        }}
      >
        <p>{item.label}</p>
        {item.children && (
          <span onClick={handleClick} style={{ userSelect: "none" }}>
            {showChildren ? "-" : "+"}
          </span>
        )}
      </div>
      {showChildren && item.children ? <MenuList list={item.children} /> : null}
    </li>
  );
};

export default MenuItem;
