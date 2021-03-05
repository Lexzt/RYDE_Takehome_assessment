import React from "react";

const TablePagination = ({
  pageNo,
  increasePage,
  decreasePage,
  amountPerPage,
  onChangeOfPagination,
  pageLimit,
}) => {
  return (
    <div>
      <h3>Page: {pageNo + 1}</h3>
      <p>
        No of Objects per page
        <select
          name="AmountPerPage"
          id="AmountPerPage"
          value={amountPerPage}
          onChange={onChangeOfPagination}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </p>
      <br />
      <button onClick={decreasePage} name="<" disabled={pageNo === 0}>
        Prev Page
      </button>
      <button onClick={increasePage} name=">" disabled={pageNo === pageLimit}>
        Next Page
      </button>
    </div>
  );
};

export default TablePagination;
