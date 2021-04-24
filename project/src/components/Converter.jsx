import { useState } from "react";
import "../App.css";

export const Converter = () => {
  const [encryptionValue, setEncryptionValue] = useState("");
  const [decryptionValue, setDecryptionValue] = useState("");
  const [selectLength, setSelectLength] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]);
  const maxlength = 122;
  const minlength = 97;
  const Decryption = (data) => {
    let result = "";

    for (let i = 0; i < data.length; i++) {
      if (data[i].charCodeAt() + 3 > maxlength) {
        result += String.fromCharCode(
          96 + data[i].charCodeAt() - maxlength + 3
        );
      } else {
        result += String.fromCharCode(data[i].charCodeAt() + 3);
      }
    }
    setDecryptionValue(result);
  };

  const Encryption = (data) => {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].charCodeAt() - 3 < minlength) {
        result += String.fromCharCode(
          123 + data[i].charCodeAt() - minlength - 3
        );
      } else {
        result += String.fromCharCode(data[i].charCodeAt() - 3);
      }
    }
    setEncryptionValue(result);
  };

  function encryptionChange(e) {
    setEncryptionValue(e.target.value);
    Decryption(e.target.value);
  }

  function decryptionChange(e) {
    setDecryptionValue(e.target.value);
    Encryption(e.target.value);
  }

  function selectOptionLength(e) {
    setSelectLength(e.target.value);
  }
  return (
    <div className="grid-container">
      <select onChange={selectOptionLength}>
        {selectLength.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <div className="topic-text">Encryption</div>
      <div className="topic-text">Decryption</div>
      <textarea onChange={encryptionChange} value={encryptionValue}></textarea>
      <textarea onChange={decryptionChange} value={decryptionValue}></textarea>
    </div>
  );
};
