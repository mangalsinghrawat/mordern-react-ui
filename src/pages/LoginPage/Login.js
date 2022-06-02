import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  // const [errors, setErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   return (values = JSON.parse(localStorage.getItem("items")));
  // }, []);

  // useEffect(() => {
  //   console.log(errors);
  //   if (Object.keys(errors).length === 0 && isSubmit) {
  //     console.log(values);
  //   }
  // }, [errors]);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username :",
      errors: "userName is required",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password : ",
    },
  ];

  // var Ousername = localStorage.getItem("username", values.username);
  // var Opassword = localStorage.getItem("password", values.password);

  // console.log(Ousername);
  // console.log(Opassword);

  var Adusername = "harish11";
  var Adpassword = "mangal";
  var Userusername = "harish12";
  var Userpassword = "mangal123";
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.username) {
  //     errors.username = "Username is Required!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is Required!";
  //   }
  //   return errors;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors(validate(values));
  //   setIsSubmit(true);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.username === Adusername.value &&
      inputs.password === Adpassword.value
    ) {
      navigate("/dashboard");
    } else if (
      inputs.username === Userusername.value &&
      inputs.password === Userpassword.value
    ) {
      navigate("/user/home");
    } else {
      alert("invalid credentials!");
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button className="btnSubmit" variant="outlined" type="submit">
          Submit
        </Button>
        <h3 align="center">
          Dont have an Account{" "}
          <Link to="/register">
            {" "}
            <b>Register</b>
          </Link>
        </h3>
      </form>
    </div>
  );
}

export default Login;
