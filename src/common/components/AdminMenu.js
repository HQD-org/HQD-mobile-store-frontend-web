import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import FragmentBrandPage from "../../pages/Brand";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../common/css/AdminMenu.Style.css";
import { logoutAction } from "../../redux/actions/Auth/authActions";
const AdminMenu = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { toggle } = props;
  const handleLogout = async () => {
    await dispatch(logoutAction());
    history.push("/login");
  };
  return (
    <div>
      <div style={{ background: "#263544" }}>
        <div style={{ padding: "5px" }}>
          <ul className="list-menu">
            <li>
              <div>
                <span>
                  <i className="bi bi-lightning-charge-fill icon-admin"></i>
                </span>
                <span>Dashboard</span>
              </div>
            </li>
          </ul>

          <div className="txtheader">Product</div>
          <ul className="list-menu">
            <li onClick={() => toggle("product")}>
              <div>
                <span>
                  <i className="fab fa-product-hunt icon-admin"></i>
                </span>
                <span>Products</span>
              </div>{" "}
            </li>
            <li onClick={() => toggle("add product")}>
              <div to="# ">
                <i className="bi bi-plus-square-fill icon-admin"></i>Add Product
              </div>{" "}
            </li>
          </ul>

          <div className="txtheader">Brand</div>
          <ul className="list-menu">
            <li onClick={() => toggle("brand")}>
              <div>
                <i className="fab fa-react icon-admin"></i>
                Brands
              </div>
            </li>
          </ul>
          <div className="txtheader">Model</div>
          <ul className="list-menu">
            <li onClick={() => toggle("model")}>
              <div>
                <i className="bi bi-front icon-admin"></i>Models
              </div>
            </li>
          </ul>
          <div className="txtheader">Branch</div>
          <ul className="list-menu">
            <li>
              <div>
                <i className="bi bi-geo-alt-fill icon-admin"></i>Branchs
              </div>
            </li>
          </ul>
          <div className="txtheader">Manage</div>
          <ul className="list-menu">
            <li>
              <div>
                <i className="bi bi-person-fill icon-admin"></i>Users
              </div>
            </li>
            <li>
              <div>
                <i className="fas fa-file-invoice icon-admin"></i>Invoices
              </div>
            </li>
          </ul>
          <div className="txtheader">Statistical</div>
          <ul className="list-menu">
            <li>
              <div>
                <i className="fas fa-chart-line icon-admin"></i>Profit
              </div>
            </li>
            <li>
              <div>
                <i className="bi bi-bar-chart-fill icon-admin"></i>Product
              </div>
            </li>
          </ul>
          <hr style={{ color: "#C4C4C4" }} />
          <div className="txtheader">Other</div>
          <ul className="list-menu">
            <li>
              <div>
                <i className="bi bi-gear-fill icon-admin"></i>Setting
              </div>
            </li>
            <li onClick={handleLogout}>
              <div>
                <i className="bi bi-box-arrow-left icon-admin"></i>
                Log out
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
