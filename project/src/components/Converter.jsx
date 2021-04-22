import { useState } from "react";
import "../App.css";
// import { Decoder } from "./Decoder";
// import { Encoder } from "./Encoder";

export const Converter = () => {
  const [encryptionValue, setEncryptionValue] = useState("Hello");
  const [decryptionValue, setDecryptionValue] = useState("");
  function handleChange(e) {
    setEncryptionValue(e.target.value);
  }
  return (
    <div className="grid-container">
      <div className="topic-text">Encryption</div>
      <div className="topic-text">Decryption</div>
      <textarea
        onChange={handleChange}
        defaultValue={this.state.value}
      ></textarea>
      <textarea
        onChange={this.handleChange}
        defaultValue={this.state.value}
      ></textarea>

      {/* <Encoder />
      <Decoder /> */}
    </div>
  );
};
