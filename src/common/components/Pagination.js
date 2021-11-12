import React from "react";
import "../../common/css/Pagination.Style.css";

const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const { page, itemPerPage, totalItem } = pagination;
  const totalPage = Math.ceil(totalItem / itemPerPage);
  const handleOnPageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  return (
    <div className="row div-pagination">
      <div className="col-1">
        <button
          className="btn-Prev"
          disabled={page <= 1}
          onClick={() => handleOnPageChange(page - 1)}
        >
          Prev
        </button>
      </div>
      <div className="col-1">
        <button
          className="btn-Next"
          disabled={page >= totalPage}
          onClick={() => handleOnPageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
