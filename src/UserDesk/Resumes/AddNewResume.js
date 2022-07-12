import React from "react";
import { Autocomplete, Checkbox, Grid, Input, TextField } from "@mui/material";
import { Form, useForm } from "../../components/useForm";
import ButtonControl from "../../components/form-controls/ButtonControl";
import SelectControl from "../../components/form-controls/SelectControl";
import RadioGroupControl from "../../components/form-controls/RadioGroupControl";
import InputControl from "../../components/form-controls/InputControl";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import axios from "axios";

function AddNewResume() {
  const initialValues = {
    fullName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    skills: "",
    expeience: "",
    resumeFile: "",
  };
  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];

  const getExperienceData = [
    { id: "1", title: "< 1 Year" },
    { id: "2", title: "1 Years" },
    { id: "3", title: "2 Years" },
    { id: "4", title: "3 Years" },
    { id: "5", title: "4 Years" },
    { id: "6", title: "5 Years" },
    { id: "7", title: "6 Years" },
    { id: "8", title: "7 Years" },
    { id: "9", title: "8 Years" },
    { id: "10", title: "9 Years" },
    { id: "11", title: "10+ Years" },
  ];

  // const getExperienceData = [
  //   { id: "1", title: "< 1 Year" },
  //   { id: "2", title: "1 Year - 2 Years" },
  //   { id: "3", title: "2 Year - 3 Years" },
  //   { id: "4", title: "3 Year - 4 Years" },
  //   { id: "5", title: "4 Year - 5 Years" },
  //   { id: "6", title: "5 Year - 6 Years" },
  //   { id: "7", title: "6 Year - 7 Years" },
  //   { id: "8", title: "7 Year - 8 Years" },
  //   { id: "9", title: "8 Year - 9 Years" },
  //   { id: "10", title: "9 Year - 10 Years" },
  // ];

  const skillsData = [
    { id: "1", title: "ANGULAR" },
    { id: "2", title: "ASP.NET" },
    { id: "3", title: "C" },
    { id: "4", title: "C++" },
    { id: "5", title: "C#" },
    { id: "6", title: "CSS" },
    { id: "7", title: "DART" },
    { id: "8", title: "HTML" },
    { id: "9", title: "JAVA" },
    { id: "10", title: "JAVASCRIPT" },
    { id: "11", title: "PHP" },
    { id: "12", title: "PYTHON" },
    { id: "13", title: "REACT" },
    { id: "14", title: "RUBY" },
    { id: "15", title: "SQL" },
    { id: "16", title: "ANDROID" },
    { id: "17", title: "FLUTTER" },
    { id: "18", title: "BOOTSTRAP" },
  ];

  //validations
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

    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post("https://localhost:44379/api/resumes", values).then((res) => {
        // setValues(...values, res.data);
        console.log(res.data);
      });
      resetForm();
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Form onSubmit={handleSubmit} style={{ width: "900px", height: "400px" }}>
      <Grid container>
        <Grid item xs={6}>
          <InputControl
            label="Full Name"
            name="fullName"
            value={values.fullName}
            error={errors.fullName}
            onChange={handleInputChange}
          />
          <InputControl
            name="email"
            label="Email"
            error={errors.email}
            value={values.email}
            onChange={handleInputChange}
          />
          <InputControl
            name="mobileNumber"
            label="Mobile Number"
            error={errors.mobileNumber}
            value={values.mobileNumber}
            onChange={handleInputChange}
          />
          <SelectControl
          
            name="expeience"
            label="Total Experience"
            value={values.expeience}
            onChange={handleChange}
            options={getExperienceData}
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
          <Autocomplete
            multiple
            id="skills"
            options={skillsData}
            getOptionLabel={(option) => option.title}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            renderInput={(params) => (
              <InputControl
                {...params}
                label="Skills"
                placeholder="Languages"
              />
            )}
          />
          <InputControl
            type="file"
            label=" "
            name="resumeFile"
            value={values.resumeFile}
            onChange={handleChange}
          />

          <div style={{ margin: "40px 20px" }}>
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
  );
}

export default AddNewResume;
