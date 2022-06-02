import { makeStyles } from "@material-ui/styles";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import ButtonControl from "./form-controls/ButtonControl";

const useStyles = makeStyles(() => ({
  dialogWrapper: {
    padding: "60px",
    height: "650px",
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function PopupComp(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  const handlClick = () => {
    setOpenPopup(false);
  };
  return (
    <Dialog open={openPopup} maxWidth="md " className={classes.dialogWrapper}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ButtonControl
            onClick={handlClick}
            variant="outlined"
            color="error"
            text="X"
          ></ButtonControl>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
