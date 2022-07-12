import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  InputAdornment,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@mui/material";
import UseDataTable from "../Data/useDataTable";
import AddIcon from "@mui/icons-material/Add";
import InputControl from "../components/form-controls/InputControl";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";
import PopupComp from "../components/PopupComp";
import AddEmployee from "../pages/Users/AddEmployee";
import axios from "axios";

// import ExcelFile from "react-export-excel/dist/ExcelPlugin/components/ExcelFile";
// import ExcelSheet from "react-export-excel/dist/ExcelPlugin/elements/ExcelSheet";

const useStyles = makeStyles(() => ({
  root: {
    margin: "20px 0px",
    display: "flex",
    alignItems: "center",
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
}));

const headCells = [
  // { id: "userId", label: "UserID" },
  // { id: "name", label: "Name" },
  // { id: "email", label: "Email" },
  // { id: "role", label: "Role" },
  // { id: "dateOfJoining", label: "DateOfJoining" },
  { id: "name", label: "Full Name" },
  { id: "email", label: "Email", disableSorting: true },
  { id: "mobile", label: "Mobile" },
  { id: "userId", label: "UserId" },
  { id: "gender", label: "Gender" },
  { id: "userRole", label: "User Role" },
  { id: "joinDate", label: "Date Of Joining" },
  { id: "actions", label: "Actions", disableSorting: true },
];

const DummyDataTable = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState([{}]);

  // useEffect(() => {
  //   axios.get("http://localhost:3006/users").then((res) => {
  //     setRecords(res.data);
  //   });
  // }, []);

  useEffect(() => {
    axios.get("https://localhost:44379/api/Recruiters").then((res) => {
      setRecords(res.data);
      // console.log(res.data);
      // res.set("Access-Control-Allow-Origin", "*");
    });
  }, []);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    UseDataTable(records, headCells, filterFn);

  // const [options, setOptions] = useState(
  //   records.forEach((record) => record.first_name)
  // );
  // //   records.forEach((record) => record.first_name);
  // const optionClick = (e) => {
  //   setOptions(e.taget.value);
  // };

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

  const deleteItem = async (Id) => {
    await axios
      .delete(`https://localhost:44379/api/Recruiters/${Id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const employees = records.filter((item) => item.Id !== Id);
        setRecords({ employees });
      });
  };
  return (
    <div style={{ overflow: "hidden" }}>
      {/* <div>
        <Autocomplete
          onClick={optionClick}
          options={options}
          sx={{ width: 300 }}
          renderInput={(options) => <TextField {...options} label="Resumes" />}
        />

        <Button variant="outlined">
          <Link to="/addusers">Add</Link>
        </Button>
      </div> */}
      <div className="userdata">
        <Toolbar className={classes.root}>
          <p className={classes.heading}>User Details</p>
          <InputControl
            className={classes.formInput}
            label="Search Employees"
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
          >
            Add New
          </Button>
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.FullName}</TableCell>
                <TableCell>{item.Email}</TableCell>
                <TableCell>{item.MobileNumber}</TableCell>
                <TableCell>{item.UserId}</TableCell>
                <TableCell>{item.Gender}</TableCell>
                <TableCell>{item.UserType}</TableCell>
                <TableCell className={classes.DateOfJoining}>
                  {item.DateOfJoining}
                </TableCell>
                <TableCell>
                  <ButtonGroup variant="text" className={classes.btnGroup}>
                    <Button onClick={() => openInPopup(item)}>Edit</Button>
                    <Button onClick={deleteItem}>Delete</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <hr />
        <TblPagination />
      </div>
      <PopupComp
        title="User Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddEmployee
          recordForEdit={recordForEdit}
          setOpenPopup={setOpenPopup}
          setRecordForEdit={setRecordForEdit}
        />
      </PopupComp>
    </div>
  );
};

export default DummyDataTable;
