/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "../../../../../common/css/Product.Style.css";
import productImg from "../../../../../common/images/addProduct.png";
import { useDispatch, useSelector } from "react-redux";
import { filterProductAction } from "../../../../../redux/actions/Product/productAction";
import InputColor from "./InputColor";

const ProductEditor = (props) => {
  const dispatch = useDispatch();
  const { setModal, currentItem, modal } = props;
  const [formAddProduct, setFormAddProduct] = useState([
    {
      name: "",
      idBrand: {},
      ram: "",
      capacity: "",
      status: "",
      price: "",
      color: [],
    },
  ]);
  const models = useSelector((state) => state.model.list) || [];
  const products = useSelector((state) => state.product.list) || []; // load data
  const [currentModel, setCurrentModel] = useState({});

  const toggle = () => setModal(false);

  useEffect(() => {
    console.log("log at ==> ProductEditor ==> currentItem: ", currentItem);
    if (currentItem) {
      const model = models.find((model) => model._id === currentItem);
      setCurrentModel(model);
    }
  }, [currentItem]);

  useEffect(() => {
    console.log("log at ==> ProductEditor ==> currentModel: ", currentModel);
    if (currentModel._id) {
      const fetchProductListByModelId = async () => {
        await dispatch(
          filterProductAction({
            idModel: currentModel._id,
            itemPerPage: 100,
            page: 1,
          })
        );
      };
      fetchProductListByModelId();
    }
  }, [currentModel]);

  // const prevIsValid = () => {
  //   if (formAddProduct.length === 0) {
  //     return true;
  //   }
  //   const someEmpty = formAddProduct.some((item) => item.Price === "");
  //   if (someEmpty) {
  //     formAddProduct.map((item, index) => {
  //       const allPrev = [...formAddProduct];
  //       if (formAddProduct[index].Price === "") {
  //         allPrev[index].error.Price = "Please enter Price";
  //       }
  //       return setFormAddProduct(allPrev);
  //     });
  //   }
  //   return !someEmpty;
  // };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const inputState = {
      color: "",
      price: "",
      ram: "",
      capacity: "",
      status: "",
      error: {
        price: null,
      },
      newRow: true,
    };
    setFormAddProduct((prev) => [...prev, inputState]);
    // if (prevIsValid()) {
    //   setFormAddProduct((prev) => [...prev, inputState]);
    // }
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setFormAddProduct((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }
        return {
          ...item,
          [event.target.name]: event.target.value,

          error: {
            ...item.error,
            [event.target.name]:
              event.target.value.length > 0
                ? null
                : [event.target.name] + " Is required",
          },
        };
      });
    });
  };

  const handleRemove = (e, index) => {
    e.preventDefault();
    setFormAddProduct((prev) => prev.filter((item) => item !== prev[index]));
  };

  return (
    <Modal isOpen={modal} toggle={toggle} className="modal-product">
      <ModalHeader className="close-x" toggle={toggle}>
        <img
          src={productImg}
          alt="product icon"
          width="5%"
          style={{ marginRight: "5px" }}
        />
        Add Product
      </ModalHeader>
      <ModalBody>
        <table
          className="table table-add-product"
          style={{ marginTop: "30px" }}
        >
          <thead>
            <tr>
              <th>Tên Model</th>
              <th>Thương hiệu</th>
              <th>RAM</th>
              <th>Dung lượng</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {formAddProduct.map((item, index) => (
              <tr>
                <td style={{ width: "300px" }}>
                  <div
                    key={index}
                    data-bs-toggle="collapse"
                    href={`#collapseColor-${index}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseColor"
                  >
                    {currentModel.name}
                  </div>

                  <div
                    class="collapse"
                    id={`collapseColor-${index}`}
                    style={{ marginTop: "20px" }}
                  >
                    <InputColor item={currentModel.color} index={index} />
                  </div>
                </td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value={
                      currentModel.idBrand ? `${currentModel.idBrand.name}` : ""
                    }
                    disabled
                  />
                </td>

                <td>
                  {item.newRow ? (
                    <select
                      className="form-select"
                      name="ram"
                      value={item.ram}
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
                  ) : (
                    <select
                      className="form-select"
                      name="ram"
                      value="3"
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
                  )}
                </td>
                <td>
                  {item.newRow ? (
                    <select
                      className="form-select"
                      name="capacity"
                      value={item.capacity}
                      onChange={(e) => onChange(index, e)}
                    >
                      <option value="16 GB">16 GB</option>
                      <option value="32 GB">32 GB</option>
                      <option value="64 GB">64 GB</option>
                      <option value="128 GB">128 GB</option>
                      <option value="256 GB">256 GB</option>
                      <option value="512 GB">512 GB</option>
                      <option value="1 TB">1 TB</option>
                    </select>
                  ) : (
                    <select
                      className="form-select"
                      name="capacity"
                      value="64"
                      onChange={(e) => onChange(index, e)}
                    >
                      <option value="16">16 GB</option>
                      <option value="32">32 GB</option>
                      <option value="64">64 GB</option>
                      <option value="128">128 GB</option>
                      <option value="256">256 GB</option>
                      <option value="512">512 GB</option>
                      <option value="1">1 TB</option>
                    </select>
                  )}
                </td>
                <td>
                  {item.newRow ? (
                    <select
                      className="form-select"
                      name="status"
                      value={item.status}
                      onChange={(e) => onChange(index, e)}
                    >
                      <option value="1" selected>
                        Còn hàng
                      </option>
                      <option value="2">Hết hàng</option>
                      <option value="3">Ngưng kinh doanh</option>
                    </select>
                  ) : (
                    <select
                      className="form-select"
                      name="Status"
                      value="2"
                      onChange={(e) => onChange(index, e)}
                    >
                      <option value="1" selected>
                        Còn hàng
                      </option>
                      <option value="2">Hết hàng</option>
                      <option value="3">Ngưng kinh doanh</option>
                    </select>
                  )}
                </td>
                <td>
                  {item.newRow ? (
                    <AiOutlineClose
                      color="red"
                      onClick={(e) => handleRemove(e, index)}
                    />
                  ) : (
                    <> </>
                  )}
                </td>
                <td>
                  <FaCheck
                    color="green"
                    onClick={(e) => handleRemove(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row">
          <div className="col-3">
            <AiOutlinePlus color="blue" onClick={handleAddProduct} />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ProductEditor;
