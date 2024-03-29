/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import {
  capacityList,
  ramList,
  statusProduct,
} from "../../../../../common/constants/ListSelect";
import "../../../../../common/css/Product.Style.css";
import productImg from "../../../../../common/images/addProduct.png";
import { renderOptionSelect } from "../../../../../common/utils/helper";
import {
  addProductAction,
  filterProductAction,
  updateProductAction,
  updateQuantityAction,
} from "../../../../../redux/actions/Product/productAction";
import InputColor from "./InputColor";

const ProductEditor = (props) => {
  const dispatch = useDispatch();
  const { setModal, currentItem, modal } = props;
  const [formAddProduct, setFormAddProduct] = useState(null);
  const models = useSelector((state) => state.model.list);
  const products = useSelector((state) => state.product.list);
  const role = useSelector((state) => state.auth.role);
  const branch = useSelector((state) => state.auth.branch);
  const [productList, setProductList] = useState([]);
  const [currentModel, setCurrentModel] = useState({});
  const [quantityList, setQuantityList] = useState([]);

  const toggle = () => {
    setModal(false);
    setFormAddProduct(null);
  };
  const fetchProductListByModelId = async () => {
    await dispatch(
      filterProductAction({
        idModel: currentModel._id,
        itemPerPage: 100,
        page: 1,
        minPrice: 0,
        maxPrice: 10000000000,
      })
    );
  };
  useEffect(() => {
    if (currentItem) {
      const model = models.find((model) => model._id === currentItem);
      setCurrentModel(model);
    }
  }, [currentItem]);

  useEffect(() => {
    if (currentModel._id) {
      fetchProductListByModelId();
    }
  }, [currentModel]);

  const handleAddProduct = () => {
    const colors = currentModel.color.map((color) => {
      return {
        name: color.name,
        price: 0,
      };
    });
    setFormAddProduct({
      idModel: currentModel._id,
      name: currentModel.name.concat(" 2GB 16GB"),
      ram: "2GB",
      capacity: "16GB",
      status: "active",
      color: colors,
      description: "Hàng có sẵn",
    });
  };

  const removeFormAdd = () => {
    setFormAddProduct(null);
  };

  const onChangeAddForm = (event) => {
    setFormAddProduct({
      ...formAddProduct,
      [event.target.name]: event.target.value,
    });
  };

  const addProduct = async () => {
    const color = formAddProduct.color.map((item) => {
      return {
        name: item.name,
        price: parseInt(item.price.replace(/[^0-9]/g, "")),
      };
    });
    formAddProduct.color = color;
    formAddProduct.name =
      currentModel.name +
      " " +
      formAddProduct.ram +
      " " +
      formAddProduct.capacity;
    const res = await dispatch(addProductAction(formAddProduct));
    if (res) {
      setFormAddProduct(null);
      fetchProductListByModelId();
    }
  };

  const onChange = (index, event) => {
    setProductList((prev) => {
      return prev.map((item, i) => {
        if (i !== index) return item;
        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      });
    });
  };

  const onQuantityChange = (index, value) => {
    setQuantityList((prev) => {
      return prev.map((item, i) => {
        if (i !== index) return item;
        const color = item.color.map((c) => {
          if (c.name !== value.color) return c;
          return {
            ...c,
            quantity: value.quantity,
          };
        });
        return {
          ...item,
          color,
        };
      });
    });
  };

  const updateQuantity = async (id) => {
    const product = quantityList.find((item) => item.id === id);
    const res = await dispatch(updateQuantityAction(product));
    if (res) fetchProductListByModelId();
  };

  const updateProduct = async (id) => {
    const product = productList.find((item) => item.id === id);
    const color = product.color.map((item) => {
      return {
        name: item.name,
        price: parseInt(item.price.replace(/[^0-9]/g, "")),
        quantityInfo: item.quantityInfo
          ? item.quantityInfo.map((q) => {
              return {
                quantity: q.quantity,
                idBranch: q.idBranch,
              };
            })
          : [],
      };
    });
    product.color = color;
    product.name =
      currentModel.name + " " + product.ram + " " + product.capacity;
    const res = await dispatch(updateProductAction(product));
    if (res) fetchProductListByModelId();
  };

  useEffect(() => {
    const editorList = products.map((product) => {
      return {
        color: product.color,
        id: product._id,
        status: product.status,
        ram: product.ram,
        capacity: product.capacity,
      };
    });
    setProductList(editorList);

    if (role === "manager branch") {
      const quantiTyInfoList = products.map((product) => {
        const colorList = product.color.map((color) => {
          const quantity =
            color.quantityInfo.find((item) => item.idBranch === branch._id) ||
            0;
          return {
            name: color.name,
            quantity: quantity,
          };
        });
        return {
          id: product._id,
          color: colorList,
        };
      });
      setQuantityList(quantiTyInfoList);
      return;
    }
  }, [products]);

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
            {productList.map((item, index) => (
              <tr key={`product-${index}`}>
                <td style={{ width: "500px" }}>
                  <div
                    data-bs-toggle="collapse"
                    href={`#collapseColor-${index}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseColor"
                  >
                    {currentModel.name}
                  </div>
                  <div
                    className="collapse"
                    id={`collapseColor-${index}`}
                    style={{ marginTop: "20px" }}
                  >
                    <InputColor
                      items={item.color}
                      index={index}
                      onValueChange={onChange}
                      onQuantityChange={onQuantityChange}
                      type={"update"}
                    />
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
                  <select
                    className="form-select"
                    name="ram"
                    value={item.ram}
                    onChange={(e) => onChange(index, e)}
                    disabled={role === "admin" ? false : true}
                  >
                    {renderOptionSelect(ramList)}
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    name="capacity"
                    defaultValue={item.capacity}
                    onChange={(e) => onChange(index, e)}
                    disabled={role === "admin" ? false : true}
                  >
                    {renderOptionSelect(capacityList)}
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    name="status"
                    defaultValue={item.status}
                    onChange={(e) => onChange(index, e)}
                    disabled={role === "admin" ? false : true}
                  >
                    {renderOptionSelect(statusProduct)}
                  </select>
                </td>
                <td>
                  <FaCheck
                    color="green"
                    onClick={() => {
                      role === "admin"
                        ? updateProduct(item.id)
                        : updateQuantity(item.id);
                    }}
                  />
                </td>
              </tr>
            ))}
            {formAddProduct && (
              <tr>
                <td style={{ width: "300px" }}>
                  <div
                    data-bs-toggle="collapse"
                    href={`#collapseColor-add`}
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseColor"
                  >
                    {currentModel.name}
                  </div>
                  <div
                    className="collapse"
                    id={`collapseColor-add`}
                    style={{ marginTop: "20px" }}
                  >
                    <InputColor
                      items={formAddProduct.color}
                      index={-1}
                      onValueChange={onChangeAddForm}
                      type={"add"}
                    />
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
                  <select
                    className="form-select"
                    name="ram"
                    value={formAddProduct.ram}
                    onChange={(e) => onChangeAddForm(e)}
                  >
                    {renderOptionSelect(ramList)}
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    name="capacity"
                    defaultValue={formAddProduct.capacity}
                    onChange={(e) => onChangeAddForm(e)}
                  >
                    {renderOptionSelect(capacityList)}
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    name="status"
                    defaultValue={formAddProduct.status}
                    onChange={(e) => onChangeAddForm(e)}
                  >
                    {renderOptionSelect(statusProduct)}
                  </select>
                </td>
                <td>
                  <AiOutlineClose color="red" onClick={removeFormAdd} />
                </td>
                <td>
                  <FaCheck
                    color="green"
                    onClick={() => {
                      return addProduct();
                    }}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="row">
          <div className="col-3">
            {role === "admin" ? (
              <AiOutlinePlus color="blue" onClick={handleAddProduct} />
            ) : (
              <></>
            )}{" "}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ProductEditor;
