import React from "react";
import "./FormInput.css";
import { TextField } from "@mui/material";

function FormInput(props) {
  const { label, errorMessage, onChange, placeholder, id, ...inputProps } =
    props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <TextField
        className="textInput"
        label={placeholder}
        size="small"
        variant="outlined"
        {...inputProps}
        onChange={onChange}
      />
      {/* <Select label={placeholder} onChange={onChange}>
        <MenuItem value="role">Admin</MenuItem>
        <MenuItem value="role">User</MenuItem>
      </Select> */}
    </div>
  );
}

export default FormInput;
