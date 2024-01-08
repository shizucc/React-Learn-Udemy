import { useState } from "react";

export default function Input({ label, onChange, initialValue }) {
  const [inputValue, setInputValue] = useState(initialValue);
  function handleChange(event) {
    setInputValue(event.target.value);
    onChange(event.target.value);
  }
  return (
    <p>
      <label>{label}</label>
      <input type="number" value={inputValue} onChange={handleChange} />
    </p>
  );
}
