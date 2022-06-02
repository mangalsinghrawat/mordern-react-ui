import React, { useState } from "react";
import {
  Button,
  InputAdornment,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@mui/material";
import { Users } from "../components/Users";
import UseDataTable from "../Data/useDataTable";
import AddIcon from "@mui/icons-material/Add";
import InputControl from "../components/form-controls/InputControl";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";
import PopupComp from "../components/PopupComp";
import AddEmployee from "../pages/Users/AddEmployee";

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
}));

const headCells = [
  // { id: "userId", label: "UserID" },
  // { id: "name", label: "Name" },
  // { id: "email", label: "Email" },
  // { id: "role", label: "Role" },
  // { id: "dateOfJoining", label: "DateOfJoining" },
  { id: "first_name", label: "First Name" },
  { id: "last_name", label: "Last Name" },
  { id: "email", label: "Email", disableSorting: true },
  { id: "gender", label: "Gender" },
  { id: "mobile", label: "Mobile" },
];

const UserHomePage = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const [records] = useState(Users);
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
        else
          return items.filter((x) =>
            // for (var i = items; i <= items.length; i++) {
            //   x.i[items].toLowerCase().includes(target.value);
            // }
            x.mobile.toString().includes(target.value)
          );
      },
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
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.mobile}</TableCell>
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
        <AddEmployee />
      </PopupComp>
    </div>
  );
};

export default UserHomePage;
