import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

export function useForm(initialValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const handleSelectChange = (e) => {
    //   setValues(...values, e.target.value);

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
    console.log({ value }.text);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
    handleSelectChange,
  };
}

//styled Components
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#809ede54",
    "& .MuiFormControl-root": {
      width: "90%",
      margin: "16px",
    },
  },
}));
export function Form(props) {
  const classes = useStyles();

  const { children, ...other } = props;
  return (
    <div>
      <form className={classes.root} autoComplete="off" {...other}>
        {children}
      </form>
    </div>
  );
}
