import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
const initialDb = [
  {
    id: 1,
    name: "JhonJhon",
    beach: "Pipeline",
  },
  {
    id: 2,
    name: "KellySlater",
    beach: "Tresstles",
  },
  {
    id: 3,
    name: "JordySmith",
    beach: "BellsBeach",
  },
];

const CrudApp = () => {
  const { db, setDb } = useState(initialDb);

  return (
    <div>
      <h2>CRUD app</h2>
      <CrudForm />
      <CrudTable data={db} />
    </div>
  );
};
export default CrudApp;
