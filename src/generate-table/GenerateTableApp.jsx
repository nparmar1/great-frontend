import { useState } from "react";
import Table from "./Table";

import "./styles.css";

export default function GenerateTableApp() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");

  return (
    <div className="app">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const data = new FormData(e.target);
          const rows = data.get("rows");
          setRows(Number(rows));
          const columns = data.get("columns");
          setColumns(columns);
          
        }}
      >
        <div>
          <label htmlFor="rows">Rows</label>
          <input
            id="rows"
            name="rows"
            type="number"
            min={1}
            defaultValue={rows}
          />
        </div>
        <div>
          <label htmlFor="columns">Columns</label>
          <input
            id="columns"
            name="columns"
            type="number"
            min={1}
            defaultValue={columns}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {Boolean(rows) && Boolean(columns) && <Table rows={rows} columns={columns} />}
    </div>
  );
}
