import React from "react";

const Toolbar = ({ filterChange, filterValue, onFilterByChange, filterBy }) => {
  return (
    <div>
      <form>
        <label>Filter By </label>
        <br />
        <input type="text" onChange={filterChange} value={filterValue}></input>
        <br />
        <select
          name="filterBy"
          id="filterBy"
          onChange={onFilterByChange}
          value={filterBy}
        >
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="job">Job</option>
        </select>
      </form>
    </div>
  );
};

export default Toolbar;
