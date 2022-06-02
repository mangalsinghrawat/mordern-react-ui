import React, { useState } from "react";
import { ReactUtilityTable } from "react-utility-table";
import { Users } from "../components/Users";
import "./UtilityTable.css";

const UtilityTable = () => {
  const [records, setRecords] = useState(Users);

  //   columns={[
  //     { title: "First Name", field: "first_name", filtering: false },
  //     { title: "Last Name", field: "last_name", filtering: false },
  //     { title: "Email", field: "email", filtering: false },
  //     { title: "Gender", field: "gender", filtering: false },
  //   ]}

  return (
    <div>
      <ReactUtilityTable
        title="Users Information"
        data={records}
        columns={[
          { title: "First Name", field: "first_name", editable: true },
          {
            title: "Last Name",
            field: "last_name",
            editable: true,
          },
          {
            title: "Email",
            field: "email",
            // editComponent: (props) => (
            //   <input
            //     type="text"
            //     value={props.value}
            //     onChange={(e) => props.onChange(e.target.value)}
            //   />
            // ),
          },
          { title: "Gender", field: "gender", filtering: false },
        ]}
        options={{
          exportButton: true,
          toolbar: true,
          pageSize: 10,
          maxBodyHeight: "450px",
          minBodyHeight: "450px",
          // paging:false,
          headerStyle: {
            backgroundColor: "#647acb",
            color: "#FFF",
          },
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
};

export default UtilityTable;
