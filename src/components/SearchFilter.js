import { Button,  } from "@mui/material";
import React, { useState,  } from "react";
import { Link } from "react-router-dom";
import DataTable from "./DataTable";
import "./SearchFilter.css";
import { Users } from "./Users";
import Navbar from "../DashBoard/Components/Navbar/Navbar";

function SearchFilter() {
  const [query, setQuery] = useState("");
  const keys = ["first_Name", "last_Name,", "email"];

  const search = (data) => {
    return data.filter((item) =>
      // item.first_Name.toLowerCase().includes(query) ||
      // item.last_Name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
      keys.some((key) => item[key.toLowerCase().includes(query)])
    );
    //.toLowerCase().include(query)s
  };
  console.log(search(Users));

  return (
    <div>
      <Navbar />
      <div className="searchFilter">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          autoFocus={true}
          onChange={(e) => setQuery(e.target.value)}
        />
        <br />

        <DataTable data={Users} />
        {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user, i) => (
          <li className="listItem" key={i}>
            {user.first_name}
          </li>
        ))}
      </ul> */}

        <Button style={{ marginTop: "40px" }} variant="outlined">
          <Link to="/dashboard">Go Back</Link>
        </Button>
      </div>
    </div>
  );
}

export default SearchFilter;
