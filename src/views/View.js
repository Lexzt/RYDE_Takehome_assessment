import React, { useState } from "react";
import Toolbar from "./Toolbar";
import TableData from "./TableData";
import TablePagination from "./TablePagination";
import fakeData from "../data";

const View = () => {
  const cleanedData = fakeData.map((e) => {
    return {
      name: e.name,
      age: e.hasOwnProperty("age") ? e.age : -1,
      job: e.job,
      married: e.hasOwnProperty("married") ? e.married : "-",
    };
  });

  const [data, setData] = useState(cleanedData);
  const [sortBy, setSortBy] = useState("asc");
  const [sortByField, setSortByField] = useState("");
  const swapSortBy = () => {
    if (sortBy === "asc") {
      setSortBy("dsc");
    } else {
      setSortBy("asc");
    }
  };

  const [filterValue, setFilterValue] = useState("");
  const [filterBy, setFilterBy] = useState("age");
  const filterChange = (e) => {
    const tFilterVal = e.target.value;
    setFilterValue(tFilterVal);

    const newData = cleanedData.filter((e) => {
      switch (filterBy) {
        case "name":
          return e.name.toUpperCase().includes(tFilterVal.toUpperCase());
        case "age":
          return e.age.toString().includes(tFilterVal);
        case "job":
          return e.job.toUpperCase().includes(tFilterVal.toUpperCase());
        default:
          console.error("default, something is wrong");
          return -1;
      }
    });
    setData(newData);
  };
  const onFilterByChange = (e) => {
    const tFilterBy = e.target.value;
    setFilterBy(tFilterBy);

    const newData = cleanedData.filter((e) => {
      switch (tFilterBy) {
        case "name":
          return e.name.toUpperCase().includes(filterValue.toUpperCase());
        case "age":
          return e.age.toString().includes(filterValue);
        case "job":
          return e.job.toUpperCase().includes(filterValue.toUpperCase());
        default:
          console.error("default, something is wrong");
          return -1;
      }
    });
    setData(newData);
  };

  const updateSortParam = (e) => {
    swapSortBy();

    const tempField = e.target.name;
    setSortByField(tempField);
    data.sort((a, b) => {
      switch (tempField) {
        case "name":
          if (sortBy === "asc") {
            return a.name > b.name;
          } else {
            return b.name > a.name;
          }
        case "age":
          if (sortBy === "asc") {
            return a.age > b.age;
          } else {
            return b.age > a.age;
          }
        case "job":
          if (sortBy === "asc") {
            return a.job > b.job;
          } else {
            return b.job > a.job;
          }
        default:
          console.error("default, something is wrong");
          return -1;
      }
    });
  };

  const [pageNo, setPageNo] = useState(0);
  const [amountPerPage, setAmountPerPage] = useState(10);
  const increasePage = () => {
    const pageLimit = Math.floor(data.length / amountPerPage);
    if (pageNo + 1 <= pageLimit) {
      setPageNo(pageNo + 1);
    }
  };

  const decreasePage = () => {
    if (pageNo > 0) {
      setPageNo(pageNo - 1);
    }
  };

  const onChangeOfPagination = (e) => {
    setAmountPerPage(parseInt(e.target.value));
  };

  return (
    <div>
      <Toolbar
        filterChange={filterChange}
        filterValue={filterValue}
        filterBy={filterBy}
        onFilterByChange={onFilterByChange}
      />
      <br />
      <TableData
        data={data.slice(
          pageNo * amountPerPage,
          pageNo * amountPerPage + amountPerPage
        )}
        sortBy={sortBy}
        sortByField={sortByField}
        updateSortParam={updateSortParam}
      />
      <TablePagination
        pageNo={pageNo}
        increasePage={increasePage}
        decreasePage={decreasePage}
        amountPerPage={amountPerPage}
        onChangeOfPagination={onChangeOfPagination}
        pageLimit={Math.floor(data.length / amountPerPage)}
      />
    </div>
  );
};

export default View;
