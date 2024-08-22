import React from "react";

const DropDown = ({ users }) => {
  return (
    <>
      {users && users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropDown;
