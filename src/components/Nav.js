import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Button variant="outlined">
        <Link style={{ textDecoration: "none" }} to="/register">
          Register
        </Link>
      </Button>
      <Button variant="outlined">
        <Link style={{ textDecoration: "none" }} to="/login">
          Login
        </Link>
      </Button>
    </div>
  );
}

export default Nav;
