import React from "react";
import "../../common/css/Pagination.Style.css";

const Pagination = (props) => {
  const { pagination, onPageChange, onItemPerPageChange } = props;
  const { page, itemPerPage, totalItem } = pagination;
  const totalPage = Math.ceil(totalItem / itemPerPage);
  const handleOnPageChange = (newPage) => {
    if (newPage === page) return;
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  const handleOnItemPerPageChange = (e) => {
    if (onItemPerPageChange) {
      onItemPerPageChange(e.target.value);
    }
  };
  const renderButton = () => {
    const buttonPNumberPage = [];
    for (let i = 1; i <= totalPage; i++) {
      buttonPNumberPage.push(
        <div className="col-1" key={`pagination-${i}`}>
          <button className="btn-Prev" onClick={() => handleOnPageChange(i)}>
            {i}
          </button>
        </div>
      );
    }
    return <> {buttonPNumberPage} </>;
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
      {renderButton()}
      <div className="col-1">
        <button
          className="btn-Next"
          disabled={page >= totalPage}
          onClick={() => handleOnPageChange(page + 1)}
        >
          Next
        </button>
      </div>
      <div className="col-1">
        <select onChange={handleOnItemPerPageChange} defaultValue={"16"}>
          <option value="1">1</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
