// import axios from "axios";
// import { useEffect } from "react";
// import ApiUrl from "./ApiUrl";

// export const FetchedData = () => {
//   useEffect(() => {
//     axios
//       .get("http://localhost:3006/")
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
// };

// //getting data from api

// //creating api.js
// export default axios.create({
//   baseURL: "http://localhost:3006/",
// });

// //fetching all the data

// //retrieveEmployees

// const retrieveEmployees = async () => {
//   const response = await ApiUrl.get("/employees");
//   return response.data;
// };

// useEffect(() => {
//   const getAllEmployees = async () => {
//     const allEmployess = await retrieveEmployees();
//     if (allEmployess) setEmployees(allEmployess);
//   };

//   getAllEmployees;
// }, []);
// //adding the data

// const addEmployeeHandler = async (employees) => {
//   const request = {
//     id: uuid(),
//     ...employees,
//   };
//   const response = await api.post("/employees", request);
//   setEmployees([...employees, response.data]);
// };

// //updating the data

// //Removing the data

// const removeEmployeeHandler = async (id) => {
//   await api.delete(`/employees/${id}`);
//   const newEmployeeList = employees.filter((employee) => {
//     return employee.id !== id;
//   });
//   setEmployees(newEmployeeList);
// };
