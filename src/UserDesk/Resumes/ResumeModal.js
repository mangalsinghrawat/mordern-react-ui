import React from "react";
import "./ResumeModel.css";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import { IconButton } from "@mui/material";

function ResumeModal(props) {
  const { records } = props;
  return (
    <div className="resume-modal">
      <div className="left-div">
        <img
          src="https://resumegenius.com/wp-content/uploads/2022-Modern-Resume-Template-Hub.png"
          alt=""
        />
      </div>
      <div className="right-div">
        <IconButton>
          <DownloadForOfflineOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ResumeModal;
