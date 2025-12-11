import React from "react";
import "./TextInput.css";

export default function TextInput({
  value,
  type = "text",
  onChange,
  placeholder,
  label,
}) {
  return (
    <div className="input-field">
      <input
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}
