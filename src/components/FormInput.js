import React from "react";
import "./FormInput.css";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

export default function FormInput(props) {
  const { label, onChange, placeholder, id, ...inputProps } = props;
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

export function FormPassword(props) {
  const {
    label,
    onChange,
    values,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <TextField
        name="password"
        className="textInput"
        label="Password"
        type={values.showPassword ? "text" : "password"}
        size="small"
        variant="outlined"
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? (
                  <VisibilityOffOutlined fontSize="small" color="error" />
                ) : (
                  <VisibilityOutlined fontSize="small" color="primary" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {/* 
      <FormControl className="textInput" size="small" variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl> */}
    </div>
  );
}
