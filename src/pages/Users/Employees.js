import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";
import React from "react";
import UserHomePage from "../../UserDesk/UserHomePage";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: "10px",
    padding: "0px",
    top: "0px",
    position: "sticky",
  },
}));

function Employees() {
  const classes = useStyles();
  // const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <Paper className={classes.pageContent}>
        <UserHomePage />
      </Paper>
      {/* <PopupComp openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddEmployee />
      </PopupComp> */}
    </>
  );
}

export default Employees;
