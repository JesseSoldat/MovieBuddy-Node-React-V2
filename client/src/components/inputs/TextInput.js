import React from "react";

const TextInput = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  const className = !error
    ? "form-control form-control-lg mt-2"
    : "form-control form-control-lg mt-2 is-invalid";

  return (
    <div>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInput.defaultProps = {
  type: "text"
};

export default TextInput;
