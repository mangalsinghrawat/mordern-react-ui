import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";


 export function useForm(
   initialValues,
   validateOnChange = false,
   validate,
   setHelperText
 ) {
   const [selectedSearchFields, setSelectedSearchFields] = useState({});
   const [values, setValues] = useState(initialValues);
   const [errors, setErrors] = useState(initialValues);
   // const [error, setError] = useState(false);

   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setValues({
       ...values,
       [name]: value,
     });
     setSelectedSearchFields(
       value === ""
         ? ""
         : {
             ...selectedSearchFields,
             [name]: value,
           }
     );
     console.log(selectedSearchFields.value);

     if (validateOnChange) validate({ [name]: value });

     //  const uniqueSearchFields = FieldsForSearching.filter((field) => {
     //    const triggered = selectedSearchFields.includes(field.name);
     //    console.log(triggered)
     //    if (triggered) {

     //      return true;
     //      }
     //    return false;
     //  });

     //  if (uniqueSearchFields) {
     //    setSelectedSearchFields((prevState) => prevState + name );
     //  }

     //  setSelectedSearchFields(...selectedSearchFields.concat( name))
     //  setSelectedSearchFields((prevState) => prevState + name);

     //  console.log(selectedSearchFields);

     //  console.log(...new Set(selectedSearchFields))

     //  setSelectedSearchFields(uniqueSearchFields.map((field) => {
     //    return field.name;
     //  }));

     //  setSelectedSearchFields(
     //    uniqueSearchFields.map((field) => {
     //      return field.name;
     //    })
     //  );

     // setSelectedSearchFields((prevState, value) =>
     //   value ? prevState + name : prevState - name
     // );
     // setSelectedSearchFields(name);
     //  console.log(selectedSearchFields);
     // if (name === "firstName") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "lastName") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "email") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "mobileNumber") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "minExperience") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "maxExperience") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "minCurrentCTC") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "maxCurrentCTC") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "minExpectedCTC") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "maxExpectedCTC") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else if (name === "skills") {
     //   setSelectedSearchFields((prevState) => prevState + name);
     // } else {
     //   setSelectedSearchFields("");
     // }
   };

   const handleSelectChange = (e) => {
     //   setValues(...values, e.target.value);

     const { name, value } = e.target;
     setValues({
       ...values,
       [name]: value,
     });
     if (validateOnChange) validate({ [name]: value });
     console.log({ value });
   };

   const resetForm = () => {
     setValues(initialValues);
     setHelperText("");
     setSelectedSearchFields([]);
     setErrors({});
   };

   // const handleRadioChange = (e) => {
   //   const { name, value } = e.target;
   //   setValues({
   //     ...values,
   //     [name]: value,
   //   });
   //   setError(false);
   //   setHelperText("");
   // };

   return {
     values,
     setValues,
     handleInputChange,
     errors,
     setErrors,
     resetForm,
     handleSelectChange,
     selectedSearchFields,
     setSelectedSearchFields,
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
