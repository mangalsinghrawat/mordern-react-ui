import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput, { FormPassword } from "../../components/FormInput";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "../../api/apiUrl";

function Login() {
  const [values, setValues] = useState({
    userId: "",
    password: "",
    showPassword: false,
  });

  // const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "userId",
      type: "text",
      placeholder: "UserId",
      // label: "Username :",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      // label: "Password : ",
    },
  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors(validate(values));
  //   setIsSubmit(true);
  // };
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
    const data = {
      UserId: values.userId,
      Password: values.password,
    };

    axios.post("Recruiters/Login", data).then((res) => {
      console.log(res);
      if (data.UserId === " " || data.Password === "") {
        toast.error("Fill all the fields first");
      } else {
        if (res.data.UserType != null) {
          sessionStorage.setItem("recruiter-details", JSON.stringify(res.data));
          window.location.href = "/dashboard";
        } else {
          toast.error("invalid credentials!");
        }
      }
    });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1 className="login-text">Login</h1>

        {inputs.map((input) =>
          input.name === "password" ? (
            <FormPassword
              name={input.name}
              values={values}
              setValues={setValues}
              password={values.password}
              showPassword={values.showPassword}
              key={input.id}
              {...input}
              value={input.password}
              onChange={onChange}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />
          ) : (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              values={values}
            />
          )
        )}
        <Button className="btnSubmit" variant="outlined" type="submit">
          Submit
        </Button>

        <h3 className="register-link" align="center">
          <hr />
          <br />
          Don't have an Account?
          <Link to="/register">
            <b>
              <u> Register</u>
            </b>
          </Link>
        </h3>
      </form>
    </div>
  );
}

export default Login;
