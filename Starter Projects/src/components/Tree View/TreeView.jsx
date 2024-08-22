import React from "react";
import data from "./data";
import MenuList from "./MenuList";
import "./styles.css";

const TreeView = () => {
  return (
    <div className="tree-view-container">
      <MenuList list={data} />
    </div>
  );
};

export default TreeView;
