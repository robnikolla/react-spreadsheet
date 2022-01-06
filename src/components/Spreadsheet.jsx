import React, { useState, useEffect } from "react";
import "./Table.css";
import { ReactComponent as Delsvg } from "./delete.svg";

export default function Spreadsheet(props) {
  const propdata = props.data;
  const [data, setData] = useState(propdata);
  const [refresh, setRefresh] = useState(0);
  let total = CalcSum(data);
  function CalcSum(list) {
    let sum = 0;
    list.map((row) => (sum = sum + row.price * row.quantity));
    return sum;
  }
  function DeleteRow(index) {
    let tbdata = [...data];
    tbdata = tbdata.filter((c) => c.id !== index);
    setData(tbdata);
  }

  function AddItem(a, b, c, d) {
    a = parseInt(a);
    c = parseInt(c);
    d = parseInt(d);

    const newList = data.concat({
      key: a,
      id: a,
      name: b,
      price: c,
      quantity: d,
    });
    setData(newList);
  }

  function AddRow() {
    const addRowList = data.concat({
      key: null,
      id: null,
      name: null,
      price: null,
      quantity: null,
    });
    setData(addRowList);
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{props.name}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          style: "overflow-x:auto",
        }}
      >
        <table
          style={{
            width: "80%",
          }}
        >
          <tr>
            <th style={{ backgroundColor: "#111111", color: "#DDDDDD" }}>ID</th>
            <th style={{ backgroundColor: "#111111", color: "#DDDDDD" }}>
              Name
            </th>
            <th style={{ backgroundColor: "#111111", color: "#DDDDDD" }}>
              Price
            </th>
            <th style={{ backgroundColor: "#111111", color: "#DDDDDD" }}>
              Quantity
            </th>
            <th style={{ backgroundColor: "#111111", color: "#DDDDDD" }}>
              Value
            </th>
            <th style={{ backgroundColor: "#111111", color: "#DDDDDD" }}>
              Functions
            </th>
          </tr>
          {data.map((row) => (
            <tr>
              <td>
                <input
                  className="idinp"
                  value={row.id}
                  onChange={(e) => (
                    (row.id = e.target.value), (row.key = e.target.value), setRefresh(e.target.value)
                  )}
                ></input>
              </td>
              <td>
                <input
                  className="idinp"
                  defaultValue={row.name}
                  onChange={(e) => (row.name = e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  className="idinp"
                  type="number"
                  defaultValue={row.price}
                  onChange={(e) => (
                    (row.price = parseInt(e.target.value)),
                    setRefresh(e.target.value)
                  )}
                ></input>
              </td>
              <td>
                <input
                  className="idinp"
                  type="number"
                  defaultValue={row.quantity}
                  onChange={(e) => (
                    (row.quantity = parseInt(e.target.value)),
                    setRefresh(e.target.value)
                  )}
                ></input>
              </td>
              <td
                style={{
                  fontSize: "20px",
                  backgroundColor: "#283747",
                  color: "#DDDDDD",
                }}
              >
                {row.price * row.quantity}
              </td>
              <td
                style={{
                  display: "flexbox",
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                <button className="delbtn" onClick={() => DeleteRow(row.id)}>
                  <Delsvg></Delsvg>
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ fontSize: 30, backgroundColor: "white" }}>Total:</td>
            <td colspan=" 2" style={{ fontSize: 30, backgroundColor: "white" }}>
              {total} &euro;
            </td>
          </tr>
        </table>
      </div>
      <br />
      <button
        style={{ marginLeft: "10%" }}
        className="addbtn"
        onClick={() => AddRow()}
      >
        Add Row
      </button>
    </>
  );
}
