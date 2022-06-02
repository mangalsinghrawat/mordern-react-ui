import { Grid } from "@mui/material";
import React from "react";
import ButtonControl from "../../components/form-controls/ButtonControl";
import CheckboxControl from "../../components/form-controls/CheckboxControl";
import DatePickerControl from "../../components/form-controls/DatePickerControl";
import InputControl from "../../components/form-controls/InputControl";
import RadioGroupControl from "../../components/form-controls/RadioGroupControl";
import SelectControl from "../../components/form-controls/SelectControl";
import { useForm, Form } from "../../components/useForm";

const getUserType = () => [
  { id: "1", title: "Admin" },
  { id: "2", title: "Recruiter" },
];

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  gender: "male",
  password: "",
  departmentId: "",
  joinDate: new Date(),
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

function AddEmployee() {
  const { values, handleInputChange } = useForm(initialValues);
  // const classes = useStyles();
  return (
    // <form className={classes.root}>
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <InputControl
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <InputControl
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
          <InputControl
            name="mobile"
            label="Mobile Number"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <InputControl
            name="password"
            label="Password"
            value={values.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={5}>
          <RadioGroupControl
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <SelectControl
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={getUserType()}
          />
          <DatePickerControl
            name="joinDate"
            label="Date of Joining"
            value={values.joinDate}
            onChange={handleInputChange}
          />
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
              type="reset"
              text="Reset"
              color="secondary"
            />
          </div>
        </Grid>
      </Grid>
    </Form>
    // </form>
  );
}

export default AddEmployee;
