import { Grid, TextField } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect } from "react";
import ButtonControl from "../../components/form-controls/ButtonControl";
import CheckboxControl from "../../components/form-controls/CheckboxControl";

import InputControl from "../../components/form-controls/InputControl";
import RadioGroupControl from "../../components/form-controls/RadioGroupControl";
import SelectControl from "../../components/form-controls/SelectControl";
import { useForm, Form } from "../../components/useForm";

const getUserType = [
  { id: "1", title: "Admin" },
  { id: "2", title: "Recruiter" },
];

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialValues = {
  fullName: "",
  email: "",
  mobileNumber: "",
  gender: "",
  userid: "",
  password: "",
  userType: "",
  dateOfJoining: moment().format("YYYY-MM-DD"),
  isPermanent: false,
};

// const useStyles = makeStyles(() => ({
//   root: {
//     margin: "10px",
//   },
//   label: {
//     textTransform: "none",
//   },
// }));

function AddEmployee(props) {
  const { recordForEdit } = props;
  const validate = (fieldValues = values) => {
    // let temp = { ...errors };
    let temp = {};

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("mobileNumber" in fieldValues)
      // temp.mobile = fieldValues.mobile
      temp.mobileNumber = /^([7-9]{1}[0-9]{9})$/.test(fieldValues.mobileNumber)
        ? ""
        : "Enter a valid Mobile number";
    if ("userType" in fieldValues)
      temp.userType =
        fieldValues.userType.length !== 0 ? "" : "This Field is required";
    if ("userid" in fieldValues)
      temp.userid = fieldValues.userid ? "" : "This field is required";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length > 6
          ? ""
          : "Password must be greater than 6 digit";

    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const {
    values,
    setValues,
    handleSelectChange,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialValues, true, validate);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     window.alert("testing...");
  //     employeeService.insertEmployee(values);
  //     resetForm();
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      window.confirm("New Record Added...");
      window.location.href = "/apiDt";
      axios
        .post("https://localhost:44379/api/Recruiters", values)
        .then((res) => {
          // setValues(...values, res.data);
          console.log(res.data);
        });
      resetForm();

      // if (recordForEdit.userId != null) {
      //   window.location.href = "/apiDt";
      //   window.alert(" Record Updated...");
      //   axios.put("http://localhost:3006/users/", recordForEdit).then((res) => {
      //     console.log(res.data);
      //   });
      // } else {
      //   window.alert("New Record Added...");
      //   window.location.href = "/apiDt";
      //   axios.post("http://localhost:3006/users/", values).then((res) => {
      //     console.log(res.data);
      //   });
      //   resetForm();
      // }
    }
  };

  //recordForEdit
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);

  // const classes = useStyles();
  return (
    // <form className={classes.root}>
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <InputControl
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <InputControl
            name="email"
            label="Email"
            value={values.email}
            error={errors.email}
            onChange={handleInputChange}
          />
          <InputControl
            name="mobileNumber"
            label="Mobile Number"
            value={values.mobileNumber}
            error={errors.mobileNumber}
            onChange={handleInputChange}
          />
          <InputControl
            name="userid"
            label="UserId"
            error={errors.userid}
            value={values.userid}
            onChange={handleInputChange}
          />
          <InputControl
            name="password"
            label="Password"
            error={errors.password}
            value={values.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={5}>
          <RadioGroupControl
            default
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <SelectControl
            name="userType"
            label="User Type"
            value={values.userType}
            onChange={handleSelectChange}
            error={errors.userType}
            options={getUserType}
          />
          <TextField
            type="date"
            name="dateOfJoining"
            label="Date of Joining"
            value={values.dateOfJoining}
            onChange={handleInputChange}
          />

          {/* <DatePickerControl
            name="joinDate"
            label="Date of Joining"
            value={values.joinDate}
            onChange={handleInputChange}
          /> */}
          <CheckboxControl
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <ButtonControl
              // classses={{ root: classes.root, label: classes.label }}
              text="Submit"
              type="submit"
            />
            <ButtonControl
              // classes={{ root: classes.root, label: classes.label }}
              text="Reset"
              color="error"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
    // </form>
  );
}

export default AddEmployee;
