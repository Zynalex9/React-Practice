import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(label) {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        )}
      </div>

      {item.children && item.children.length > 0 && displayCurrentChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

export default MenuItem;
