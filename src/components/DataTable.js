import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "first_Name", headerName: "First name", width: 130 },
  { field: "last_Name", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },
];

const DataTable = ({ data }) => {
  const rows = data.map((user, i) => ({
    id: user.id,
    first_Name: user.first_name,
    last_Name: user.last_name,
    email: user.email,
  }));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "371px",
        width: "600px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
//     <div style={{ width: "100%" }}>
//       <table
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-around",
//         }}
//       >
//         <tr>
//           <th>Name</th>
//           <th>Surname</th>
//           <th>Email</th>
//         </tr>
//         <tr>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.first_name}</td>
//               <td>{item.last_name}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tr>
//       </table>
//     </div>
//   );
// };

export default DataTable;
