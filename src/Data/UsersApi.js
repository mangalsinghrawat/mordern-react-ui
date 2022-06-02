import React, { useEffect, useState } from "react";
import api from "./ApiUrl";

function UsersApi() {
  const [users, setUsers] = useState([]);

  //retrieve users

  const retrieveUsers = async () => {
    const response = await api.get("/users");
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);
  console.log(users);
  return <div></div>;
}

export default UsersApi;
