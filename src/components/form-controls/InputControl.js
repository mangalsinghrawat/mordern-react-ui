import { TextField } from "@mui/material";
import React from "react";

export default function InputControl(props) {
  const { name, label, value, onChange ,...other} = props;
  return (
    <div>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
      />
    </div>
  );
}
