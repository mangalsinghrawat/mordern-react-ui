import React, { useState } from "react";
import { Button } from "@mui/material";
import FormInput from "../../components/FormInput";
import "./AddUsersForm.css";

function AddUsersForm() {
  const [values, setValues] = useState({
    userid: "",
    fullname: "",
    email: "",
    userRole: "",
    DateOfJoining: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userid",
      type: "text",
      placeholder: "UserId",
      // errorMessage:
      //   "Username should be 3-10 character and should not have any spacial character",
      label: "User ID :",
    },
    {
      id: 2,
      name: "fullname",
      type: "text",
      placeholder: "FullName",
      // errorMessage: "Email Id is Invalid",
      label: "Name : ",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      // errorMessage: "Email Id is Invalid",
      label: "Email Id : ",
    },
    {
      id: 4,
      name: "userRole",
      type: "text",
      placeholder: "UserRole",
      label: "User Role : ",
    },
    {
      id: 5,
      name: "DateOfJoining",
      type: "date",
      placeholder: "",
      label: "Date Of Joining : ",
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6 to 10 character and must have 1 letter, 1 number and 1 special character",
      label: "Password :",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(values));
    window.location.href = "/dashboard";
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="addUser">
      <form className="userForm" onSubmit={handleSubmit}>
        <h1>User Details</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button className="btnAddUser" variant="outlined" type="submit">
          Add User
        </Button>
      </form>
    </div>
  );
}

export default AddUsersForm;
