import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Tooltip,
} from "@mui/material";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import UseDataTable from "../../Data/useDataTable";
import InputControl from "../../components/form-controls/InputControl";
import PopupComp from "../../components/PopupComp";
import AddEmployee from "../../pages/Users/AddEmployee";
import ResumeModal from "./ResumeModal";
import AddNewResume from "./AddNewResume";
import ResumeHoverModal from "./ResumeHoverModal";
import { ResumeJSONData } from "./ResumeJSONData";
import "./ResumeDataTable.css";
import ResumeMangal from "../../Data/Resume-Mangal.pdf";

// import ExcelFile from "react-export-excel/dist/ExcelPlugin/components/ExcelFile";
// import ExcelSheet from "react-export-excel/dist/ExcelPlugin/elements/ExcelSheet";

const useStyles = makeStyles(() => ({
  root: {
    margin: "20px 0px",
    display: "flex",
    alignItems: "center",
  },
  pageContent: {
    margin: "10px",
    padding: "0px",
  },
  formInput: {
    width: "100%",
    right: "50px",
  },

  heading: {
    flexGrow: 1,
    fontSize: "25px",
    color: "#647acb",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
  btnGroup: {
    "&:hover": {
      transition: "0.2s ease-in",
      backgroundColor: "#fff",
    },
  },
  // resumeData: {
  //   backgroundColor: "#fff",
  //   padding: " 10px",
  //   paddingBottom: "30px",
  // },
}));

const headCells = [
  // { id: "userId", label: "UserID" },
  // { id: "name", label: "Name" },
  // { id: "email", label: "Email" },
  // { id: "role", label: "Role" },
  // { id: "dateOfJoining", label: "DateOfJoining" },
  { id: "name", label: "Name" },
  { id: "email", label: "Email", disableSorting: true },
  { id: "mobile", label: "Mobile" },
  { id: "gender", label: "Gender" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },

  { id: "resume", label: "Resume", disableSorting: true },
];

const ResumeDataTable = () => {
  const classes = useStyles();
  const [records] = useState(ResumeJSONData);
  const [openPopup, setOpenPopup] = useState(false);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [recordForEdit, setRecordForEdit] = useState(null);

  // const [records, setRecords] = useState([{}]);

  // useEffect(() => {
  //   axios.get("http://localhost:3006/users").then((res) => {
  //     setRecords(res.data);
  //   });
  // }, []);

  //************************ DATA FETCHING WITH API ********************************* */

  // useEffect(() => {
  //   axios.get("https://localhost:44379/api/resumes").then((res) => {
  //     setRecords(res.data);
  //     // console.log(res.data);
  //     // res.set("Access-Control-Allow-Origin", "*");
  //   });
  // }, []);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    UseDataTable(records, headCells, filterFn);

  // const [options, setOptions] = useState(
  //   records.forEach((record) => record.first_name)
  // );
  // //   records.forEach((record) => record.first_name);
  // const optionClick = (e) => {
  //   setOptions(e.taget.value);
  // };

  console.log(records);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        // else if (!target.value) return items("not found");
        else
          return items.filter((x) =>
            // for (var i = items; i <= items.length; i++) {
            //   x.i[items].toLowerCase().includes(target.value);
            // }
            x.MobileNumber.toString().includes(target.value)
          );
      },
    });
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  //Resume Download Method
  const resumeDownload = () => {
    window.alert("Do you want to open this file");
    window.open(ResumeMangal);
  };

  // const openResumeOptions = () => {
  //   setOpenPopup(true);
  //   return (
  //     <ResumeHoverModal
  //       records={records}
  //       setOpenPopup={setOpenPopup}
  //       openPopup={openPopup}
  //     />
  //   );
  // };

  // const openResumeOptions = () => {
  //   setOpenPopup(true);
  //   return (
  //     <PopupComp
  //       title="Resume View"
  //       openPopup={openPopup}
  //       setOpenPopup={setOpenPopup}
  //     >
  //       <ResumeModal setOpenPopup={setOpenPopup} />
  //     </PopupComp>
  //   );
  // };

  // const rowDeleteHandler = (id) => {
  //   axios
  //     .delete(`https://localhost:44379/api/Recruiters/${id}`)
  //     .then((res) => setRecords(res.data));
  // };

  // const excelDownloadHandler = () => {
  //   return (
  //     <ExcelFile>
  //       <ExcelSheet dataset={records} name="Employees" />
  //     </ExcelFile>
  //   );
  // };

  return (
    <>
      <Paper className={classes.pageContent}>
        <div style={{ overflow: "hidden", padding: "10px" }}>
          <div className={classes.resumeData}>
            {/* <div className="userdata"> */}
            <Toolbar className={classes.root}>
              <p className={classes.heading}>Resumes</p>
              <InputControl
                className={classes.formInput}
                label="Search Resume"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                onChange={handleSearch}
              />
              {/* <ButtonControl
            className={classes.newButton}
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => setOpenPopup(true)}
          /> */}
              {/* <ExcelFile
            element={
              <Tooltip title="Download">
                <IconButton
                 
                  style={{ right: "25px" }}
                  className={classes.newButton}
                  aria-label="download"
                >
                  <FileDownloadOutlinedIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <ExcelSheet dataset={records} name="Employees">
            <ExcelColumn label={headCells.label} /> 
            </ExcelSheet>
          </ExcelFile> */}
              <Button
                className={classes.newButton}
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => setOpenPopup(true)}
                // onClick={openAddPopup}
              >
                Add New
              </Button>
            </Toolbar>
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPagingAndSorting().map((item) => (
                  //F => f ~ f => F
                  <TableRow key={item.email}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.mobile}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>{item.skills}</TableCell>
                    <TableCell>{item.experience}</TableCell>

                    <Tooltip title="Click To Download" placement="top">
                      <TableCell
                        style={{ padding: "0px 35px" }}
                        onClick={resumeDownload}
                      >
                        <img
                          src="https://resumegenius.com/wp-content/uploads/2022-Modern-Resume-Template-Hub.png"
                          className="resume-image"
                          alt=""
                        />

                        {/* <img src={item.resume} onMouseOver={resumeOpen} /> */}
                        {/* <IconButton onMouseOver={openResumeOptions}>
                        <FilePresentOutlinedIcon />
                      </IconButton> */}
                      </TableCell>
                    </Tooltip>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
            <hr />
            <TblPagination />
          </div>
          <PopupComp
            title="Candidate Resume Form"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <AddNewResume
              recordForEdit={recordForEdit}
              setOpenPopup={setOpenPopup}
              setRecordForEdit={setRecordForEdit}
            />
          </PopupComp>
        </div>
      </Paper>
    </>
  );
};

export default ResumeDataTable;

//  {
//    openResumeOptions ? (
//      <PopupComp
//        title="Candidate Resume Form"
//        openPopup={openPopup}
//        setOpenPopup={setOpenPopup}
//      >
//        <ResumeModal />
//      </PopupComp>
//    ) : (
//      <PopupComp
//        title="Candidate Resume Form"
//        openPopup={openPopup}
//        setOpenPopup={setOpenPopup}
//      >
//        <AddEmployee
//          recordForEdit={recordForEdit}
//          setOpenPopup={setOpenPopup}
//          setRecordForEdit={setRecordForEdit}
//        />
//      </PopupComp>
//    );
//  }
