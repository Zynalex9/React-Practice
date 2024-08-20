import React, { useState } from "react";
import "./styles.css";

const Accordian = () => {
  const data = [
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience.",
    },
    {
      id: 2,
      question: "How do you create a React component?",
      answer:
        "You can create a React component using either a function or a class. For functional components, you define a function that returns JSX. For class components, you extend React.Component and define a render method.",
    },
    {
      id: 3,
      question: "What is the purpose of useState in React?",
      answer:
        "The useState hook allows you to add state management to functional components. It returns a state variable and a function to update that variable.",
    },
    {
      id: 4,
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It allows you to write HTML elements and components in JavaScript code. It is then transformed into regular JavaScript by tools like Babel.",
    },
    {
      id: 5,
      question: "How does React handle events?",
      answer:
        "React handles events using a synthetic event system. Event handlers are passed as props to components and are used to respond to user interactions like clicks or form submissions.",
    },
  ];
  const [openID, setOpenID] = useState(null);
  const handleOpen = (id) => {
    setOpenID(openID === id ? null : id);
  };
  return (
    <>
      <div className="container">
        {data.map((item) => (
          <div className="accordian-body" key={item.id}>
            <div className="title">
              <h3>{item.question}</h3>
              <button onClick={() => handleOpen(item.id)}>{}{openID === item.id ? '-' : "+"}</button>
            </div>
            {openID === item.id && <div className="text">{item.answer}</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordian;
