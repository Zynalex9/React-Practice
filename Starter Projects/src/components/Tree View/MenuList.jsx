import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list }) => {
  return (
    <ul>
      {list.map((item, idx) => (
        <MenuItem item={item} key={idx} />
      ))}
    </ul>
  );
};

export default MenuList;
