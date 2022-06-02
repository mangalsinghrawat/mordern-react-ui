import { Button } from "@mui/material";
import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import "./sample.css";

const SampleAddUser = () => {
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="sample">
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
      </form>
    </div>
  );
};

export default SampleAddUser;
