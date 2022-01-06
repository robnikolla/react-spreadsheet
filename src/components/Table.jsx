import React from "react";
import Field from "./Field";
import Row from "./Row";
import "../App.css";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nr.</th>
          <th>Emertimi i Punimeve</th>
          <th>Njesia</th>
          <th>Sasia</th>
          <th>Cmimi</th>
          <th>Vlera</th>
        </tr>
      </thead>

      <tbody> {props.children}</tbody>
      <tr>
        <th colspan="4"> Totali i Projektit</th>
        <th colspan="2"> {props.projtotal}&euro;</th>
      </tr>
    </table>
  );
}

export default Table;
