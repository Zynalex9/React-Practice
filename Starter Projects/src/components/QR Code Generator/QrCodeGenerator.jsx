import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QrCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [QrCode, setQrCode] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setQrCode(input);
      setInput("");
    }
  };

  return (
    <>
      <div className="QR-container">
        <div className="input">
          <h3>Enter Your Value</h3>
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            value={input}
            name="qr-code"
            id="text"
            placeholder="Your text here"
          />
        </div>
        <button
          onClick={() => {
            setQrCode(input);
            setInput("");
          }}
        >
          Generate
        </button>
        <QRCode value={QrCode} />
      </div>
    </>
  );
};

export default QrCodeGenerator;
