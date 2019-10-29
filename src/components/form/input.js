import React from "react"

const Input = ({ name, type, placeholder, err }) => {
  return (
    <p>
      <label>{name}</label>
      <br />
      <input
        type={type}
        name="entry.2005620554"
        id={name}
        placeholder={placeholder}
        className="form-input-large"
      />
    </p>
  )
}

export default Input
