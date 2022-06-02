import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

export const SidebarData = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <HomeOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "User Info",
    path: "/users-info",
    icon: <PersonOutlineOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Add User",
    path: "/register",
    icon: <PersonAddAltIcon />,
    cName: "nav-text",
  },
];
