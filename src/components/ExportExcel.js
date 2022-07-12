import React from "react";
import ExcelColumn from "react-export-excel/dist/ExcelPlugin/elements/ExcelColumn";
import ExcelSheet from "react-export-excel/dist/ExcelPlugin/elements/ExcelSheet";



const ExportExcel = () => {
  return (
    <div>
      <ExcelFile>
        <ExcelSheet dataset={records} name="Employees">
          <ExcelColumn label={headCells.label} />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default ExportExcel;
