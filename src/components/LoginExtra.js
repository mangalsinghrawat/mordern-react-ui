import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/LoginPage/Login.css";
import "./FormInput.css";

function LoginExtra() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user/home");
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <TextField
          name="username"
          className="textInput"
          label="Username"
          size="small"
          variant="outlined"
          onChange={onChange}
        />
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
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button className="btnSubmit" variant="outlined" type="submit">
          Submit
        </Button>
        <h3 align="center">
          Dont have an Account
          <Link to="/register">
            <b> Register</b>
          </Link>
        </h3>
      </form>
    </div>
  );
}

export default LoginExtra;
