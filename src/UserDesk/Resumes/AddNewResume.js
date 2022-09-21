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
import { makeStyles } from "@material-ui/styles";
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
import { Link, useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  btnControls: {
    height: "50px",
    top: "15px",
    left: "10px !important",
  },
}));

function AddNewResume() {
  const classes = useStyles();
  const [skills, setSkills] = useState([{}]);
  const [genders, setGenders] = useState([{}]);
  const [helperText, setHelperText] = useState("");
  const [tempVal, setTempVal] = useState([{}]);
  const [isDuplicate, setIsDuplicate] = useState(false);
  // const [selectedSkills, setSelectedSkills] = useState();
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFileData, setResumeFileData] = useState(null);
  const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNumber: "",
    Gender: "",
    Experience: "",
    CurrentCTC: "",
    ExpectedCTC: "",
    Skills: "",
    ResumeFile: "",
    SkillsCount: 0,
  };
  // const genderItems = [
  //   { id: "1", title: "Male" },
  //   { id: "2", title: "Female" },
  // ];
  const location = useLocation();
  const navigate = useNavigate();

  const recordForEdit = location.state;

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

    if ("FirstName" in fieldValues)
      temp.FirstName = /^[a-zA-Z ,.'-]+$/.test(fieldValues.FirstName)
        ? ""
        : "Required FirstName ";

    if ("LastName" in fieldValues)
      temp.LastName = /^[a-zA-Z ,.'-]+$/.test(fieldValues.LastName)
        ? ""
        : "Required LastName";

    if ("Experience" in fieldValues) {
      // /^([0-9].?)*$/.
      temp.Experience = /^[+-]?([0-9]*[.])?[0-9]+$/.test(fieldValues.Experience)
        ? ""
        : "Required Experience";
    }

    if ("ExpectedCTC" in fieldValues) {
      temp.ExpectedCTC = /^[+-]?([0-9]*[.])?[0-9]+$/.test(
        fieldValues.ExpectedCTC
      )
        ? ""
        : "Required CTC";
    }

    if ("CurrentCTC" in fieldValues) {
      temp.CurrentCTC = /^[+-]?([0-9]*[.])?[0-9]+$/.test(fieldValues.CurrentCTC)
        ? ""
        : "Current CTC";
    }

    if ("Skills" in fieldValues) {
      temp.Skills = fieldValues.Skills ? "" : "Required Skills";
    }

    if ("Email" in fieldValues) {
      //(temp.Email = /$^|.+@.+..+/.test(fieldValues.Email)
      (temp.Email = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i.test(
        fieldValues.Email
      )
        ? ""
        : "Email is not valid") ||
        (temp.Email = fieldValues.Email ? "" : " Required Email ");
    }
    if ("MobileNumber" in fieldValues)
      // temp.mobile = fieldValues.mobile
      temp.MobileNumber = /^([7-9]{1}[0-9]{9})$/.test(fieldValues.MobileNumber)
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

  useEffect(() => {
    skillDataByApi();
    skillName();
    getGenderByApi();
    if (recordForEdit !== null) {
      setValues({
        ...recordForEdit,
      });
    }
  }, []);
  // console.log(recordForEdit.Skills);
  // const defaultSkills = recordForEdit.Skills;

  // console.log(recordForEdit);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.Gender === "1") {
      setHelperText("");
      setErrors(false);
    } else if (values.Gender === "2") {
      setHelperText("");
      setErrors(false);
    } else {
      setHelperText("Please select an option.");
      setErrors(true);
    }
    if (validate()) {
      if (recordForEdit !== null) {
        const id = recordForEdit.Candidate_Id;
        debugger;
        await axios.put(`Resumes/${id}`, values).then((res) => {
          console.log(res.data);
        });
      } else {
        await axios.post("Resumes/CheckDuplicate", values).then((res) => {
          console.log(res);
          if (res.data.length !== 0) {
            setIsDuplicate(true);
            // setValues(res.data);

            // navigate("/resume-data", { state: data });
            setTempVal(res.data);
          } else {
            setIsDuplicate(false);
            navigate("/resume-data");
            toast.done("New Record Added");
          }
        });
      }
      // if (tempVal.length == 0) {
      //   await axios.post("Resumes", values).then((res) => {
      //     setValues(res.data);
      //     console.log(res);
      //   });
      // }

      // window.location.href = "/resume-data";

      // resetForm();

      // console.log(values);
    }
  };

  const skillName = () => {
    skills.map((skill) => skill.Skill_Name);
  };

  // const genderTitle = genders.map((gender) => gender.Gender_Title);
  // // genders.map((gender) => gender.title);

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
      // if (recordForEdit.ResumeFile !== null) {
      //   setResumeFile(recordForEdit.ResumeFile);
      // } else {
      //   setResumeFile(file);
      // }
      // setResumeFile(recordForEdit.ResumeFile);
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
  // console.log(recordForEdit.ResumeFile);
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
  //   window.alert(values.MobileNumber + values.skills);
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
      Skills: val.map((value) => value.Skill_Id).toString(),
      SkillsCount: val.map((value) => value.Skill_Name).length,
    });
    setErrors(false);
    // const postSkillData = {
    //   MobileNumber: values.MobileNumber,
    //   Skills: selectedValue,
    // };

    // axios
    //   .post("Resumes/saveSkillnMobile", {
    //     MobileNumber: values.MobileNumber,
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

  // console.log(values.skills);

  return (
    <div className="dashboard">
      <div className="glass">
        <Sidebar className="sidebar" />
        <div className="dashboard-content">
          <div>
            {recordForEdit == null ? (
              <Navbar navHeader="Add Resume" />
            ) : (
              <Navbar navHeader="Update Resume" />
            )}
          </div>
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
                        name="FirstName"
                        size="small"
                        value={values.FirstName || ""}
                        error={errors.FirstName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputControl
                        label="Last Name"
                        name="LastName"
                        size="small"
                        value={values.LastName || ""}
                        error={errors.LastName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <InputControl
                    name="Email"
                    label="Email"
                    size="small"
                    style={{ width: "95%" }}
                    error={errors.Email}
                    value={values.Email || ""}
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
                        name="MobileNumber"
                        label="Mobile Number"
                        size="small"
                        error={errors.MobileNumber}
                        value={values.MobileNumber || ""}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputControl
                        name="Experience"
                        label="Experience"
                        error={errors.Experience}
                        size="small"
                        value={values.Experience || ""}
                        onChange={handleInputChange}
                        // options={getExperienceData}
                      />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={6}>
                      <InputControl
                        name="CurrentCTC"
                        label="Current CTC"
                        size="small"
                        error={errors.CurrentCTC}
                        value={values.CurrentCTC || ""}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputControl
                        name="ExpectedCTC"
                        label="Expected CTC"
                        size="small"
                        error={errors.ExpectedCTC}
                        value={values.ExpectedCTC || ""}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={5}>
                      <RadioGroupControl
                        default
                        name="Gender"
                        row
                        label="Gender"
                        value={values.Gender || ""}
                        helpertext={helperText}
                        onChange={handleRadioChange}
                        items={genders}
                      />
                    </Grid>
                  </Grid>
                  <Autocomplete
                    multiple
                    // defaultValue={[defaultSkills || ""]}
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
                        value={values.Skills || ""}
                        error={errors.Skills}
                      />
                    )}
                  />
                  <br />
                  {isDuplicate ? (
                    <p>
                      Record Already Exist &nbsp;
                      <Link to="/resume-data" state={tempVal}>
                        <u>View Records</u>
                      </Link>
                    </p>
                  ) : (
                    ""
                  )}
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
                  <div
                    style={{
                      width: "150%",
                      display: "flex",
                      paddingBottom: "25px",
                      marginLeft: "-17px",
                    }}
                  >
                    <InputControl
                      type="file"
                      label=" "
                      name="ResumeFile"
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
                    <ButtonControl
                      className={classes.btnControls}
                      // classses={{ root: classes.root, label: classes.label }}
                      text="Submit"
                      type="submit"
                    />
                    &nbsp;&nbsp;
                    <ButtonControl
                      // classes={{ root: classes.root, label: classes.label }}
                      className={classes.btnControls}
                      text="Reset"
                      color="error"
                      onClick={resetForm}
                    />
                  </div>
                  {/* <div
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
                  </div> */}
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
