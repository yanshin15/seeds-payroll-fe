import { useMemo, useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

const TeacherTable = ({ teachers }) => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "name" },
    { field: "subject" },
    { field: "class_type", headerName: "Class Type" },
    { field: "payroll" },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));
  return (
    <section className="flex justify-center">
      <div
        className="ag-theme-material bg-center border rounded-md shadow-lg md:w-full"
        style={{ height: "50vh", width: "60%" }}
      >
        <AgGridReact
          rowData={teachers}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
        ></AgGridReact>
      </div>
    </section>
  );
};

export default TeacherTable;
