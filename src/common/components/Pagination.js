import React from "react";

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
    <div>
      <button disabled={page <= 1} onClick={() => handleOnPageChange(page - 1)}>
        Prev
      </button>
      <button
        disabled={page >= totalPage}
        onClick={() => handleOnPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
