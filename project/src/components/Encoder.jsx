import { useState } from "react";
import "../App.css";

export const Encoder = () => {
  const [value, setValue] = useState("Hello");
  return (
    <textarea
      defaultValue={value}
      onChange={(e) => setValue(e.target.value)}
    ></textarea>
  );
};
