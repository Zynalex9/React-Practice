import React from "react";
import data from "./data";
import MenuList from "./MenuList";
import "./styles.css"
const TreeView = () => {
  return (
    <div className="items">
      <MenuList list={data} />
    </div>
  );
};

export default TreeView;
