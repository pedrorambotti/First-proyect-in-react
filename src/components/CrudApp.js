import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
//ANTES
/* DESPUES ESTO BORRALO
*/

const CrudApp = () => {
  const initialDb = [
    {id: 1, name: "JhonJhon", beach: "Pipeline"},
    {id: 2, name: "KellySlater", beach: "Tresstles"},
    {id: 3,name: "JordySmith", beach: "BellsBeach"}
  ]
//DESPUES
//ES CON [] NO CON {}
  const [db, setDb] = useState(initialDb);
 
 //NOSOTROS LOGEAMOS POR CONSOLA initialDb (antes daba undefined, ahora muestra el array de obj)
  console.log(db)
  return (
    <div>
      <h2>CRUD app</h2>
      <CrudForm />
      <CrudTable data={db} />
    </div>
  );
};
export default CrudApp;
