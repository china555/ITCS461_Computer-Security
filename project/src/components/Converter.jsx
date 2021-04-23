import { useState } from "react";
import "../App.css";

export const Converter = () => {
  const [encryptionValue, setEncryptionValue] = useState("");
  const [decryptionValue, setDecryptionValue] = useState("");

  const Decryption = (data) => {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].charCodeAt() + 5 > 122) {
        result += data[i].charCodeAt() - 122 + 5;
      }
      result += String.fromCharCode(data[i].charCodeAt() + 5);
    }
    setDecryptionValue(result);
  };

  const Encryption = (data) => {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      result += String.fromCharCode(data[i].charCodeAt() - 5);
    }
    setEncryptionValue(result);
  };

  function handleChange(e) {
    setEncryptionValue(e.target.value);
    Decryption(e.target.value);
  }

  function handleChange2(e) {
    setDecryptionValue(e.target.value);
    Encryption(e.target.value);
  }
  return (
    <div className="grid-container">
      <div className="topic-text">Encryption</div>
      <div className="topic-text">Decryption</div>
      <textarea onChange={handleChange} value={encryptionValue}></textarea>
      <textarea onChange={handleChange2} value={decryptionValue}></textarea>
    </div>
  );
};
