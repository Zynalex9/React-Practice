import React, { useEffect, useRef, useState } from "react";
import "./style.css";
const Scroll = () => {
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(false);
  const myBtn = useRef();
  const myBtnTop = useRef();
  async function getUsers() {
    try {
      setPending(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data) {
        setUsers(data.users.map((item) => item.firstName));

        setPending(false);
      }
    } catch (e) {
      setPending(false);
      setError(e);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  if (pending) {
    return <h2>Loading Please wait</h2>;
  }
  return (
    <div ref={myBtnTop} className="scroll-wrapper">
      <button
        className="scrolldownBtn"
        onClick={() => {
          myBtn.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Scroll to Bottom
      </button>
      <ul>
        {users &&
          users.map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
      <button
        ref={myBtn}
        className="scrolltopBtn"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        Scroll to Top
      </button>
      <button
        className="scrolltopBtn"
        onClick={() => {
          myBtnTop.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Scroll to Componet Top
      </button>
    </div>
  );
};

export default Scroll;
