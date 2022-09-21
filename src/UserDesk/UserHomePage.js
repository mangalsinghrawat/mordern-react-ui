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
import axios from "../api/apiUrl";
import { toast } from "react-toastify";
import { ENUM_GENDER } from "../utils/Enums";

const useStyles = makeStyles(() => ({
  root: {
    margin: "20px 0px",
    display: "flex",
    alignItems: "center",
  },
  formInput: {
    width: "105%",
    right: "90px",
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
  { id: "userId", label: "UserId" },
  { id: "name", label: "Full Name" },
  { id: "email", label: "Email", disableSorting: true },
  { id: "gender", label: "Gender" },
  { id: "mobile", label: "Mobile" },
  { id: "dateOfJoining", label: "Date Of Joining" },
  { id: "actions", label: "Actions", disableSorting: true },
];

// const initialValues = {
//   FullName: "",
//   Email: "",
//   MobileNumber: "",
//   Gender: " ",
//   UserId: "",
//   Password: "",
//   UserType: "",
//   DateOfJoining: moment().format("YYYY-MM-DD"),
//   // isPermanent: false,
// };

const UserHomePage = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [records, setRecords] = useState([{}]);
  const [recordForEdit, setRecordForEdit] = useState({});
  // const [values, setValues] = useState(records);

  // const [records] = useState(EmployeeData);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    UseDataTable(records, headCells, filterFn);

  // const [options, setOptions] = useState(
  //   records.forEach((record) => record.first_name)
  // );
  // //   records.forEach((record) => record.first_name);
  // const optionClick = (e) => {
  //   setOptions(e.taget.value);

  // };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("Recruiters").then((res) => {
        setRecords(res.data);
      });
    };
    fetchData();
  }, []);

  const deleteItem = async (item) => {
    const Id = item.Id;
    await axios.delete(`Recruiters/${Id}`).then((res) => {
      const employees = records.filter((item) => item.Id !== Id);
      setRecords({ employees });
      toast.success("Record Deleted.");
    });
    window.location.href = "/users-info";
  };

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
            // x.name.toString().includes(target.value)

            x.FullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const insertOrUpdate = (id, values, resetForm) => {
    if (values.id === 0) {
      axios
        .post("http://localhost:62075/api/Recruiters", values)
        .then((res) => {
          setRecords(...records, res.data);
        });
    } else {
      axios
        .put(`http://localhost:62075/api/Recruiters/${id}`, values)
        .then((res) => {
          setRecords(...records, res.data);
        });
      resetForm();
      setOpenPopup(false);
    }
  };

  // const openInPopup = (item) => {
  //   setRecordForEdit((recordForEdit) => [recordForEdit, item]);
  //   console.log(recordForEdit);
  //   setOpenPopup(true);
  // };
  const openInPopup = (item) => {
    setRecordForEdit(item);
    // console.log(recordForEdit);
    setOpenPopup(true);
  };

  console.log(recordForEdit);

  // const editClick = (item) => {
  //   setRecordForEdit(item.FullName);
  //   setOpenPopup(true);
  // };

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
            variant="standard"
            className={classes.formInput}
            label="Search Employee"
            placeholder="Enter name..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          {/* <ExcelFile
            element={
              <Tooltip title="Download">
                <IconButton
                  // onClick={excelDownloadHandler}
                  style={{ right: "25px" }}
                  className={classes.newButton}
                  aria-label="download"
                >
                  <FileDownloadOutlinedIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <ExcelSheet dataset={EmployeeData} name="Employees" />
          </ExcelFile> */}
          {/* <ButtonControl
            className={classes.newButton}
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => setOpenPopup(true)}
          /> */}

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
            {recordsAfterPagingAndSorting().map((item, index) => (
              <TableRow style={{ height: "10px !important" }} key={index}>
                <TableCell>{item.UserId}</TableCell>
                <TableCell>{item.FullName}</TableCell>
                <TableCell>{item.Email}</TableCell>
                <TableCell>{ENUM_GENDER[item.Gender]}</TableCell>
                <TableCell>{item.MobileNumber}</TableCell>
                <TableCell
                  className={classes.dateofj}
                  style={{ padding: "0px 35px", width: "100px" }}
                >
                  {item.DateOfJoining}
                </TableCell>
                <TableCell>
                  <ButtonGroup variant="text" className={classes.btnGroup}>
                    {/* <Button
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      Edit
                    </Button> */}
                    <Button
                      onClick={() => {
                        deleteItem(item);
                      }}
                    >
                      Delete
                    </Button>
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
          insertOrUpdate={insertOrUpdate}
        />
      </PopupComp>
    </div>
  );
};

export default UserHomePage;
