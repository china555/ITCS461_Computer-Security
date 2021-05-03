import { useState, useEffect } from "react";
import "../App.css";

export const Converter = () => {
  const [encryptionValue, setEncryptionValue] = useState("");
  const [decryptionValue, setDecryptionValue] = useState("");
  const selectLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [select, setSelect] = useState(0);
  const maxlength = 122;
  const minlength = 97;

  const Decryption = (data) => {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      // case of space bar and full stop
      if (data[i].charCodeAt() === 32 || data[i].charCodeAt() === 46) {
        result += String.fromCharCode(data[i].charCodeAt());
      } else if (data[i].charCodeAt() + select > maxlength) {
        result += String.fromCharCode(
          96 + data[i].charCodeAt() - maxlength + select
        );
      } else {
        result += String.fromCharCode(data[i].charCodeAt() + select);
      }
    }
    setDecryptionValue(result);
  };

  const Encryption = (data) => {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      // case of space bar and full stop
      if (data[i].charCodeAt() === 32 || data[i].charCodeAt() === 46) {
        result += String.fromCharCode(data[i].charCodeAt());
      } else if (data[i].charCodeAt() - select < minlength) {
        result += String.fromCharCode(
          123 + data[i].charCodeAt() - minlength - select
        );
      } else {
        result += String.fromCharCode(data[i].charCodeAt() - select);
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
    setSelect(Number(e.target.value));
  }

  useEffect(() => {
    Decryption(encryptionValue);
  }, [select]);

  return (
    <div>
      <div className="flex-container flex-container-center">
        <div className="space">🔑</div>
        <select onChange={selectOptionLength}>
          <option>Select Your Key Length</option>
          {selectLength.map((data, index) => {
            return (
              <option key={index} value={data}>
                {data}
              </option>
            );
          })}
        </select>
      </div>
      <div className="grid-container">
        <div className="topic-text">Encryption</div>
        <div className="topic-text">Decryption</div>
        <textarea
          onChange={encryptionChange}
          value={encryptionValue}
        ></textarea>
        <textarea
          onChange={decryptionChange}
          value={decryptionValue}
        ></textarea>
      </div>
    </div>
  );
};
