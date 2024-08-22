import React, { useEffect, useState } from "react";
import "./profile.css";
import UserDetail from "./UserDetail";

const Finder = () => {
  const [value, setValue] = useState("Zynalex9");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getUsers() {
    try {
      setLoading(true);
      setError(null); // Reset any previous errors
      const response = await fetch(`https://api.github.com/users/${value}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      getUsers();
      setValue("");
    }
  };

  return (
    <div className="main-container">
      <div className="search-user">
        <input
          onKeyDown={(e) => handleSearch(e)}
          type="text"
          name="search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={getUsers}>Search</button>
      </div>

      <div className="userDetail">
        {loading ? (
          <div style={{textAlign:"center",marginTop:"20px",fontWeight:"400"}}>Loading... Please Wait</div>
        ) : error ? (  <h1 style={{textAlign:"center",marginTop:"20px",fontWeight:"400"}}>{error}</h1>) : user ? (<UserDetail user={user} />) : null}
      </div>
    </div>
  );
};

export default Finder;
