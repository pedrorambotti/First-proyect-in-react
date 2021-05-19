import React from "react";
import CrudTableRow from "./CrudTableRow";
//ACA FALTABA LA PROPIEDAD PROPS QUE HACE QUE TOME LAS PROPIEDADES QUE LE PASASTE DEL PADRE
// <CrudTable data={db} /> 
const CrudTable = (props) => {
  console.log(props)
  return (
    <div>
      <h3>tabla de datos </h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Beach</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length === 0 ? (
            <tr>
              <td colSpan="3"> Sin datos</td>
            </tr>
          ) : (
            props.data.map((el) => <CrudTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
};
export default CrudTable;
