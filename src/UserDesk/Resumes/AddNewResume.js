import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Checkbox,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Form, useForm } from "../../components/useForm";
import ButtonControl from "../../components/form-controls/ButtonControl";
import SelectControl from "../../components/form-controls/SelectControl";
import RadioGroupControl from "../../components/form-controls/RadioGroupControl";
import InputControl from "../../components/form-controls/InputControl";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import axios from "../../api/apiUrl";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Navbar from "../../DashBoard/Components/Navbar/Navbar";
import Sidebar from "../../DashBoard/Components/Sidebar/Sidebar";
import PdfViewer from "../../components/PdfViewer";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { toast } from "react-toastify";
import MyResume from "../../Data/Resume-Mangal.pdf";

import FileViewerComp from "../../components/FileViewerComp";
import ResumeFileViewer from "../../components/ResumeFileViewer";
import WebViewer from "../../components/WebViewer";
import WebViewers from "../../components/WebViewer";

function AddNewResume() {
  const [skills, setSkills] = useState([{}]);
  const [genders, setGenders] = useState([{}]);
  const [helperText, setHelperText] = useState("");
  // const [selectedSkills, setSelectedSkills] = useState();
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFileData, setResumeFileData] = useState(null);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    experience: "",
    currentCTC: "",
    expectedCTC: "",
    skills: "",
    resumeFile: "",
    skillsCount: 0,
  };
  // const genderItems = [
  //   { id: "1", title: "Male" },
  //   { id: "2", title: "Female" },
  // ];

  useEffect(() => {
    skillDataByApi();
    skillName();
    getGenderByApi();
  }, []);

  const skillDataByApi = async () => {
    await axios.get("Skills").then((res) => {
      setSkills(res.data);
    });
  };

  const getGenderByApi = () => {
    axios.get("Genders").then((res) => {
      setGenders(res.data);
      // console.log(res.data);
    });
  };

  //validations00
  const validate = (fieldValues = values) => {
    // let temp = { ...errors };
    let temp = {};

    if ("firstName" in fieldValues)
      temp.firstName = /^[a-zA-Z ,.'-]+$/.test(fieldValues.firstName)
        ? ""
        : "Required FirstName ";

    if ("lastName" in fieldValues)
      temp.lastName = /^[a-zA-Z ,.'-]+$/.test(fieldValues.lastName)
        ? ""
        : "Required LastName";

    if ("experience" in fieldValues) {
      // /^([0-9].?)*$/.
      temp.experience = /^[+-]?([0-9]*[.])?[0-9]+$/.test(fieldValues.experience)
        ? ""
        : "Required Experience";
    }

    if ("expectedCTC" in fieldValues) {
      temp.expectedCTC = /^[+-]?([0-9]*[.])?[0-9]+$/.test(
        fieldValues.expectedCTC
      )
        ? ""
        : "Required CTC";
    }

    if ("currentCTC" in fieldValues) {
      temp.currentCTC = /^[+-]?([0-9]*[.])?[0-9]+$/.test(fieldValues.currentCTC)
        ? ""
        : "Current CTC";
    }

    if ("skills" in fieldValues) {
      temp.skills = fieldValues.skills ? "" : "Required Skills";
    }

    if ("email" in fieldValues) {
      //(temp.email = /$^|.+@.+..+/.test(fieldValues.email)
      (temp.email = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i.test(
        fieldValues.email
      )
        ? ""
        : "Email is not valid") ||
        (temp.email = fieldValues.email ? "" : " Required Email ");
    }
    if ("mobileNumber" in fieldValues)
      // temp.mobile = fieldValues.mobile
      temp.mobileNumber = /^([7-9]{1}[0-9]{9})$/.test(fieldValues.mobileNumber)
        ? ""
        : "Required Number";
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const {
    values,
    handleSelectChange,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialValues, true, validate, setResumeFileData, setHelperText);

  // const addValue = {
  //   FullName: "xyz",
  //   Email: "pxys@j.com",
  //   MobileNumber: "9082221722",
  //   Experience: "2.3",
  //   CurrentCTC: "2 LPA",
  //   ExpectedCTC: "6 LPA",
  //   Gender: "Male",
  //   Skills: "ASP.net,C#,SQL",
  //   ResumeFile: "http://localhost:62075/ResumeFiles/download.pdf",
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.gender === "1") {
      setHelperText("");
      setErrors(false);
    } else if (values.gender === "2") {
      setHelperText("");
      setErrors(false);
    } else {
      setHelperText("Please select an option.");
      setErrors(true);
    }
    if (validate()) {
      axios.post("Resumes", values).then((res) => {
        setValues(res.data);
        console.log(res);
      });
      window.location.href = "/resume-data";

      resetForm();

      console.log(values);
    }
  };

  const skillName = () => {
    skills.map((skill) => skill.Skill_Name);
  };

  // const genderTitle = genders.map((gender) => gender.Gender_Title);
  // // genders.map((gender) => gender.title);

  console.log(values);

  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const docs = [{ uri:  require("../../Data/Resume-Mangal") }];

  const filesFormats = [
    ".doc",
    ".docx",
    ".pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".document",
    "application/pdf",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const isRightFormat = filesFormats.includes(file.type);
    if (isRightFormat) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });

      setResumeFile(file);
      const formData = new FormData();
      formData.append("resumeFile", file);
      console.log(isRightFormat);
      console.log(file);

      setResumeFileData(formData);
    } else {
      toast.error("invalid file format!");
    }
  };

  const uploadFileHandler = () => {
    axios
      .post("Resumes/SaveResumeFile", resumeFileData)
      .then((res) => {
        console.log(res.data);
        toast.success("File Uploaded SuccessFully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleSkillBlur = () => {
  //   window.alert(values.mobileNumber + values.skills);
  // };

  // const deleteFileHandler = () => {
  //   setResumeFile((values.resumeFile = ""));
  //   setResumeFileData((file) => resumeFileData.delete());

  //   // console.log(values.resumeFile);
  // };

  const handleCheckBox = (e, val) => {
    var selectedValue = "";
    if (selectedValue === "") {
      selectedValue = val.map((value) => value.Skill_Id).toString();
    } else {
      selectedValue = val.replace((value) => value, " ").toString();
    }
    // const selectedValue = val;
    // console.log(selectedValue);
    // setSelectedSkills(selectedValue);

    console.log(selectedValue);
    setValues({
      ...values,
      skills: val.map((value) => value.Skill_Id).toString(),
      skillsCount: val.map((value) => value.Skill_Name).length,
    });
    setErrors(false);
    // const postSkillData = {
    //   MobileNumber: values.mobileNumber,
    //   Skills: selectedValue,
    // };

    // axios
    //   .post("Resumes/saveSkillnMobile", {
    //     MobileNumber: values.mobileNumber,
    //     Skills: selectedValue,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  };
  const handleRadioChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setHelperText("");
    setErrors(false);
  };

  // console.log(values);

  // console.log(values.skills);

  return (
    <div className="dashboard">
      <div className="glass">
        <Sidebar className="sidebar" />
        <div className="dashboard-content">
          {/* <div>
            <Navbar />
          </div> */}
          <div style={{ overflow: "auto" }}>
            <Form
              onSubmit={handleSubmit}
              style={{ width: "91%", height: "auto" }}
            >
              <Grid container>
                <Grid item xs={4} style={{ marginLeft: "-20px" }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <InputControl
                        label="First Name"
                        name="firstName"
                        size="small"
                        value={values.firstName}
                        error={errors.firstName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputControl
                        label="Last Name"
                        name="lastName"
                        size="small"
                        value={values.lastName}
                        error={errors.lastName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <InputControl
                    name="email"
                    label="Email"
                    size="small"
                    style={{ width: "95%" }}
                    error={errors.email}
                    value={values.email || ""}
                    onChange={handleInputChange}
                  />

                  {/* <SelectControl
            name="expeience"
            label="Total Experience"
            value={values.expeience}
            onChange={handleChange}
            options={getExperienceData}
          /> */}

                  <Grid container>
                    <Grid item xs={6}>
                      <InputControl
                        name="mobileNumber"
                        label="Mobile Number"
                        size="small"
                        error={errors.mobileNumber}
                        value={values.mobileNumber || ""}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputControl
                        name="experience"
                        label="Experience"
                        error={errors.experience}
                        size="small"
                        value={values.experience || ""}
                        onChange={handleInputChange}
                        // options={getExperienceData}
                      />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={6}>
                      <InputControl
                        name="currentCTC"
                        label="Current CTC"
                        size="small"
                        error={errors.currentCTC}
                        value={values.currentCTC || ""}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputControl
                        name="expectedCTC"
                        label="Expected CTC"
                        size="small"
                        error={errors.expectedCTC}
                        value={values.expectedCTC || ""}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={5}>
                      <RadioGroupControl
                        default
                        name="gender"
                        row
                        label="Gender"
                        value={values.gender || ""}
                        helperText={helperText}
                        onChange={handleRadioChange}
                        items={genders}
                      />
                    </Grid>
                  </Grid>
                  <Autocomplete
                    multiple
                    disableCloseOnSelect
                    // onBlur={handleSkillBlur}
                    // value={values.skills}
                    limitTags={2}
                    id="skills"
                    style={{ width: "110%" }}
                    onChange={handleCheckBox}
                    options={skills}
                    getOptionLabel={(options) => options.Skill_Name}
                    isOptionEqualToValue={(option, value) => option === value}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                          // onChange={handleCheckBox}
                          // value={values.skills}
                        />
                        {option.Skill_Name}
                      </li>
                    )}
                    renderInput={(params) => (
                      <InputControl
                        {...params}
                        label="Skills"
                        placeholder="Languages"
                        value={values.skills || ""}
                        error={errors.skills}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      marginTop: "15px",
                      border: "1px solid",
                      height: "450px",
                      width: "500px",
                      overflowY: "auto",
                      paddingLeft: "50px",
                      marginBottom: "10px",
                    }}
                  >
                    {/* <WebViewers /> */}
                    <PdfViewer scale={2.2} width={300} pdf={resumeFile} />
                    {/* <FileViewerComp file={MyResume} /> */}
                    {/* <ResumeFileViewer /> */}
                    {/* <DocViewer
                      pluginRenderers={DocViewerRenderers}
                      documents={docs}
                    /> */}
                  </div>
                  <div style={{ width: "150%", display: "flex" }}>
                    <InputControl
                      type="file"
                      label=" "
                      name="resumeFile"
                      size="small"
                      value={values.resumeFile || ""}
                      onChange={handleFileChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ paddingRight: "10px" }}
                          >
                            <IconButton onClick={uploadFileHandler} edge="end">
                              <FileUploadOutlinedIcon
                                style={{ paddingRight: "10px" }}
                                // fontSize="small"
                                color="primary"
                              />
                            </IconButton>
                            {/* <IconButton onClick={deleteFileHandler}>
                              <DeleteOutlineOutlinedIcon
                                // fontSize="small"
                                color="error"
                              />
                            </IconButton> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "250px",
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: "40px",
                    }}
                  >
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewResume;
