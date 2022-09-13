import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactUtilityTable } from "react-utility-table";
function UtilityTable() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:62075/api/Recruiters/").then((res) => {
      setRecords([res.data]);
    });
  }, []);
  return (
    <div>
      <ReactUtilityTable
        title="Users Information"
        data={records[0]}
        columns={[
          { title: "UserId", field: "UserId", editable: true },
          {
            title: "FullName",
            field: "FullName",
            editable: true,
          },
          {
            title: "Email",
            field: "Email",
          },
          { title: "Gender", field: "Gender", filtering: false },
          { title: "MobileNumber", field: "MobileNumber", filtering: false },
          { title: "DateOfJoining", field: "DateOfJoining", filtering: false },
        ]}
        options={{
          actionCellPositonStart: false,
          exportButton: true,
          pageSize: 10,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setRecords([...records, newData]);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...records];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setRecords([...dataUpdate]);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...records];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setRecords([...dataDelete]);
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
export default UtilityTable;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { ReactUtilityTable } from "react-utility-table";
// import "./UtilityTable.css";

// const UtilityTable = () => {
//   const [records, setRecords] = useState([{}]);
//   const [stopScroll, setStopScroll] = React.useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       await axios.get("http://localhost:62075/api/Recruiters/").then((res) => {
//         setRecords(res.data);
//       });
//     };
//     fetchData();
//   }, []);

//   const apiCall = () => {
//     setStopScroll(true);
//   };

//   return (
//     <div>
//       <ReactUtilityTable
//         title="Users Information"
//         data={records}
//         columns={[
//           { title: "Id", field: "Id", editable: true },
//           { title: "UserId", field: "UserId", editable: true },
//           {
//             title: "FullName",
//             field: "FullName",
//             editable: true,
//           },
//           {
//             title: "Email",
//             field: "Email",
//           },
//           { title: "Gender", field: "Gender", filtering: false },
//           { title: "MobileNumber", field: "MobileNumber", filtering: false },
//           { title: "DateOfJoining", field: "DateOfJoining", filtering: false },
//         ]}
//         options={{
//           paging: false,
//           //paging should be always false when onScrollFetch is called
//           maxBodyHeight: "8rem",
//           //always prefer to give height for scroll effect
//           showSerialNo: true,
//           //incase if you want to serial no/counting
//           //serialNoTitle:"Sr No",
//         }}
//         stopScrollFetch={stopScroll}
//         stopScrollFetchText="You Reached to Bottom"
//         onScrollFetch={(oldData) =>
//           new Promise((resolve, reject) => {
//             setTimeout(() => {
//               apiCall(records);

//               resolve();
//             }, 3000);
//           })
//         }
//         // exportButton: true,
//         // toolbar: true,
//         // pageSize: 10,
//         // maxBodyHeight: "450px",
//         // minBodyHeight: "450px",
//         // // paging:false,
//         // headerStyle: {
//         //   backgroundColor: "#647acb",
//         //   color: "#FFF",
//         // },

//         editable={{
//           onRowAdd: (newData) =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 setRecords([...records, newData]);
//                 resolve();
//               }, 1000);
//             }),
//           onRowUpdate: (newData, oldData) =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 const dataUpdate = [...records];
//                 const index = oldData.tableData.id;
//                 dataUpdate[index] = newData;
//                 setRecords([...dataUpdate]);
//                 resolve();
//               }, 1000);
//             }),
//           onRowDelete: (oldData) =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 const dataDelete = [...records];
//                 const index = oldData.tableData.id;
//                 dataDelete.splice(index, 1);
//                 setRecords([...dataDelete]);
//                 resolve();
//               }, 1000);
//             }),
//         }}
//       />
//     </div>
//   );
// };

// export default UtilityTable;
