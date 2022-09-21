import React from "react";
// import { Users } from "../../components/Users";
import Employees from "../../pages/Users/Employees";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./UserInfo.css";

// const headCells = [
//   // { id: "userId", label: "UserID" },
//   // { id: "name", label: "Name" },
//   // { id: "email", label: "Email" },
//   // { id: "role", label: "Role" },
//   // { id: "dateOfJoining", label: "DateOfJoining" },
//   { id: "first_name", label: "First Name" },
//   { id: "last_name", label: "Last Name" },
//   { id: "email", label: "Email" },
//   { id: "gender", label: "Gender" },
// ];

const UserInfo = () => {
  // const [records] = useState(Users);
  // const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
  //   UseDataTable(records, headCells);

  return (
    <div className="userinfo">
      <div className="dashboard">
        <div className="glass">
          <Sidebar className="sidebar" />
          <div className="dashboard-content">
            <div>
              <Navbar navHeader="Users Information" />
            </div>
            <div className="userdata">
              <Employees />
              {/* <UtilityTable /> */}
              {/* <TblContainer>
                <TblHead />
                <TableBody>
                  {recordsAfterPagingAndSorting().map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.first_name}</TableCell>
                      <TableCell>{item.last_name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.gender}</TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              {/* <TableBody>
                  {recordsAfterPagingAndSorting().map((item) => (
                    <TableRow key={item.userid}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.role}</TableCell>
                      <TableCell>{item.dateOfJoining}</TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              {/* </TblContainer>
              <hr />
              <TblPagination /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
