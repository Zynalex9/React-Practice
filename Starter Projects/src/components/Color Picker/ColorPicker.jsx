import React, { useState } from "react";
import "./color.css";

const ColorPicker = () => {
  const [BgColor, setBgColor] = useState("#F1F1F1");
  const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function colorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function randomHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomNumber = colorUtility(colors.length);
      hexColor += colors[randomNumber];
    }
    setBgColor(hexColor);
  }

  function randomRGB() {
    let r = colorUtility(256); // changed to 256 to include 255
    let g = colorUtility(256);
    let b = colorUtility(256);
    setBgColor(`rgb(${r},${g},${b})`);
  }

  function randomColorGenerator() {
    const randomChoice = colorUtility(2); // Choose between 0 and 1
    if (randomChoice === 0) {
      randomHex();
    } else {
      randomRGB();
    }
  }

  return (
    <>
      <div className="color-container" style={{ background: BgColor }}>
        <h1>Random Color Generator</h1>
        <div className="buttons">
          <button onClick={randomHex}>HEX Color Generator</button>
          <button onClick={randomRGB}>RGB Color Generator</button>
          <button onClick={randomColorGenerator}>Random Color Generator</button>
        </div>
        <h1>{BgColor}</h1>
      </div>
    </>
  );
};

export default ColorPicker;
