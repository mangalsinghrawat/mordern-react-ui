import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import backpic from "../../images/backpic.svg";
import Logo from "../../images/logo.png";

function Home() {
  return (
    <div className="home-container">
      <img alt="logo" src={Logo} />
      <div className="left-container">
        <h2>BitByBit Recruitement Service Desk</h2>
        <p className="web-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ullam
          sit dolor voluptatibus! Vitae temporibus repellendus perferendis
          asperiores voluptates quae, dolorum animi placeat quam. Expedita
          suscipit numquam commodi id laudantium!
        </p>
        <Button variant="outlined">
          <Link to="/login">Login/Register</Link>
        </Button>
      </div>
      <div className="right-container">
        <img alt="Sample" src={backpic} />
      </div>
    </div>
  );
}

export default Home;
