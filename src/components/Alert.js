import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";

function Alert(props) {
  const { message, severity } = props;
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => {
    setOpenAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
export default Alert;
