import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput, { FormPassword } from "../../components/FormInput";
import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
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

  // var Ousername = localStorage.getItem("username", values.username);
  // var Opassword = localStorage.getItem("password", values.password);

  // console.log(Ousername);
  // console.log(Opassword);

   var AdminId = "admin";
   var AdminPass = "bitbybit";
   var UserId = "test1";
   var UserPass = "bitbybit";
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
     if (values.username === AdminId && values.password === AdminPass) {
       navigate("/dashboard");
     } else if (values.username === UserId && values.password === UserPass) {
       navigate("/user/home");
     } else {
       alert("invalid credentials!");
     }
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
