import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import productImg from "../../../common/images/addProduct.png";
import "../../../common/css/Product.Style.css";

const AddProductForm = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [formAddproduct, setFormAddproduct] = useState([]);
  const prevIsValid = () => {
    if (formAddproduct.length === 0) {
      return true;
    }
    const someEmpty = formAddproduct.some((item) => item.Price === "");
    if (someEmpty) {
      formAddproduct.map((item, index) => {
        const allPrev = [...formAddproduct];
        if (formAddproduct[index].Price === "") {
          allPrev[index].error.Price = "Please enter Price";
        }
        return setFormAddproduct(allPrev);
      });
    }
    return !someEmpty;
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const inputState = {
      Color: "",
      Price: "",
      RAM: "",
      Capacity: "",
      Status: "",

      error: {
        Price: null,
      },
    };
    if (prevIsValid()) {
      setFormAddproduct((prev) => [...prev, inputState]);
    }
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setFormAddproduct((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }
        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      });
    });
  };

  const handleRemove = (e, index) => {
    e.preventDefault();

    setFormAddproduct((prev) => prev.filter((item) => item !== prev[index]));
  };
  const toggle = () => setModal(!modal);

  return (
    <div className="container-fluid">
      <div className="row">
        <table className="table table-striped" style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Model</th>
              <th>Thương hiệu</th>
              <th>Hệ điều hành</th>
              <th>Thời gian ra mắt</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={toggle}>
              {buttonLabel}
              <td>1</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i className="bi bi-x-circle-fill"></i>
              </td>
            </tr>
            <tr onClick={toggle}>
              {buttonLabel}
              <td>2</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i className="bi bi-x-circle-fill"></i>
              </td>
            </tr>
            <tr onClick={toggle}>
              {buttonLabel}
              <td>3</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i className="bi bi-x-circle-fill"></i>
              </td>
            </tr>
            <tr onClick={toggle}>
              {" "}
              {buttonLabel}
              <td>4</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i className="bi bi-x-circle-fill"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader className="close-x" toggle={toggle}>
            <img
              src={productImg}
              alt=""
              width="5%"
              style={{ marginRight: "5px" }}
            />
            Add Product
          </ModalHeader>
          <ModalBody>
            <form>
              <table
                className="table table-add-product"
                style={{ marginTop: "30px" }}
              >
                <thead>
                  <tr>
                    <th>Tên Model</th>
                    <th>Thương hiệu</th>
                    <th>Màu</th>
                    <th>Giá</th>
                    <th>RAM</th>
                    <th>Dung lượng</th>
                    <th>Trạng thái</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {formAddproduct.map((item, index) => (
                    <tr key={`item-${index}`}>
                      <td>Oppo A31</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="OPPO"
                          disabled
                        />
                      </td>
                      <td>
                        <select
                          className="form-select"
                          name="Color"
                          value={item.Color}
                          onChange={(e) => onChange(index, e)}
                        >
                          <option value="1" selected>
                            Đỏ
                          </option>
                          <option value="2">Nâu</option>
                          <option value="3">Xanh</option>
                        </select>
                      </td>
                      <td>
                        <div className="input-group">
                          <input
                            type="text"
                            className={
                              item.error.Price
                                ? "form-control is-invalid"
                                : "form-control "
                            }
                            name="Price"
                            value={item.Price}
                            onChange={(e) => onChange(index, e)}
                          />
                          <span className="input-group-text">VNĐ</span>
                        </div>
                        {item.error.Price && (
                          <div className="invalid-feedback">
                            {item.error.Price}
                          </div>
                        )}
                      </td>
                      <td>
                        <select
                          className="form-select"
                          name="RAM"
                          value={item.RAM}
                          onChange={(e) => onChange(index, e)}
                        >
                          <option value="1" selected>
                            1 GB
                          </option>
                          <option value="2">2 GB</option>
                          <option value="3">3 GB</option>
                          <option value="4">4 GB</option>
                          <option value="5">6 GB</option>
                          <option value="6">8 GB</option>
                          <option value="7">12 GB</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          name="Capacity"
                          value={item.Capacity}
                          onChange={(e) => onChange(index, e)}
                        >
                          <option value="1" selected>
                            8 GB
                          </option>
                          <option value="2">16 GB</option>
                          <option value="3">32 GB</option>
                          <option value="4">64 GB</option>
                          <option value="5">128 GB</option>
                          <option value="6">256 GB</option>
                          <option value="7">512 GB</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          name="Status"
                          value={item.Status}
                          onChange={(e) => onChange(index, e)}
                        >
                          <option value="1" selected>
                            Còn hàng
                          </option>
                          <option value="2">Hết hàng</option>
                          <option value="3">Ngưng kinh doanh</option>
                        </select>
                      </td>
                      <td>
                        <i
                          className="bi bi-x-circle-fill"
                          onClick={(e) => handleRemove(e, index)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-3">
                  <div></div>
                  <i className="bi bi-plus" onClick={handleAddProduct}></i>
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default AddProductForm;
