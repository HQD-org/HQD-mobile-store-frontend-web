import React from "react";

const InforOrder = () => {
  return (
    <div className="summary">
      <div className="row">
        <h5>SUMMARY</h5>
      </div>
      <hr style={{ marginTop: "20px" }} />
      <div className="row">
        <h6>
          Tổng <span style={{ color: "red" }}>2</span> sản phẩm
        </h6>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Tạm tính: </h6>
        </div>
        <div className="col-6" style={{ textAlign: "end" }}>
          <p>7.999.999₫</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Phí ship: </h6>
        </div>
        <div className="col-6" style={{ textAlign: "end" }}>
          <p>30.000₫</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <h6>Tổng ước tính: </h6>
        </div>
        <div className="col-6" style={{ textAlign: "end" }}>
          <p>8.029.999₫</p>
        </div>
      </div>
      <div className="row">
        <button className="btnCheckout" type="submit">
          THANH TOÁN NGAY
        </button>
      </div>
    </div>
  );
};

export default InforOrder;
