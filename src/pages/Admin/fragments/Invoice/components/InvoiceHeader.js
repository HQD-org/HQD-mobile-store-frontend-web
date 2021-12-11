import React from "react";
import "../../../../../common/css/Invoice.Style.css";

const InvoiceHeader = () => {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ marginTop: "50px", alignItems: "baseline" }}
      >
        <div className="col">
          <div>
            <i className="fas fa-file-invoice icon-admin icon-invoice"></i>
            <span className="name-management">Invoice</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <form>
          <div className="row mb-3">
            <div className="col-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Họ tên người nhận"
                aria-label="Search"
              />
            </div>
            <div className="col-2">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Số điện thoại"
                aria-label="Search"
              />
            </div>
            <div className="col-3">
              <button className="btnFilterInvoice" type="submit">
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceHeader;
