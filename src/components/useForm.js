import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
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
  return (
    <div>
      <form className={classes.root} autoComplete="off">
        {props.children}
      </form>
    </div>
  );
}
