import React, { useEffect, useState } from "react";
import "./autocomplete.css";
import DropDown from "./DropDown";
const AutoComplete = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [filteredData, setFilteredData] = useState("");
  function handleOnChange(e) {
    setValue(e.target.value);
    let query = e.target.value.toLowerCase();
    setSearchParams(query);

    if (query.length > 1) {
      const filteredUser = data.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setFilteredData(filteredUser);
    }
  }

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        if (data) {
          const users = data.users.map((item) => item.firstName);
          setData(users);
          setLoading(false);
        }
      } catch (e) {
        setError(error);
        setLoading(false);
      }
    }
    getUser();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            className="searchBox"
            value={value}
            onChange={handleOnChange}
          />
        </div>
        <DropDown users={filteredData} />
      </div>
    </>
  );
};

export default AutoComplete;
