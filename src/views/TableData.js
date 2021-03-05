import React from "react";

const TableData = ({ data, sortBy, updateSortParam }) => {
  return (
    <div>
      <table className="Table">
        <tr>
          <th>
            Name
            <button onClick={updateSortParam} name="name">
              {sortBy === "asc" ? ">" : "<"}
            </button>
          </th>
          <th>
            Age
            <button onClick={updateSortParam} name="age">
              {sortBy === "asc" ? ">" : "<"}
            </button>
          </th>
          <th>
            Job
            <button onClick={updateSortParam} name="job">
              {sortBy === "asc" ? ">" : "<"}
            </button>
          </th>
          <th>Marriage Status</th>
        </tr>
        {data.map((e) => (
          <tr>
            <td>{e.name === "" ? "" : e.name}</td>
            <td>{e.age === -1 ? "-" : e.age}</td>
            <td>{e.job ? e.job : "-"}</td>
            <td>
              {e.married === "-" ? "-" : e.married ? "Married" : "Not Married"}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableData;
