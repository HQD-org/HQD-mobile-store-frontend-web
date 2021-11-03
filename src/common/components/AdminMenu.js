import React from "react";
import { Link } from "react-router-dom";
import "../../common/css/AdminMenu.Style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import FragmentBrandPage from "../../pages/Brand";

const AdminMenu = () => {
  return (
    // <Router>
    <div>
      <div style={{ background: "#263544" }}>
        <div style={{ padding: "5px" }}>
          <ul className="list-menu">
            <li>
              <Link to="# ">
                <span>
                  <i className="bi bi-lightning-charge-fill icon-admin"></i>
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>

          <div className="txtheader">Product</div>
          <ul className="list-menu">
            <li>
              <Link to="# ">
                <span>
                  <i className="fab fa-product-hunt icon-admin"></i>
                </span>
                <span>Products</span>
              </Link>{" "}
            </li>

            <li>
              <Link to="# ">
                <i className="bi bi-plus-square-fill icon-admin"></i>Add Product
              </Link>{" "}
            </li>
          </ul>

          <div className="txtheader">Brand</div>
          <ul className="list-menu">
            <li>
              <Link to="/dashboard/brand">
                <i className="fab fa-react icon-admin"></i>Brands
              </Link>
            </li>
            <li>
              <Link to="# ">
                <i className="bi bi-plus-square-fill icon-admin"></i>Add Brand
              </Link>
            </li>
          </ul>
          <div className="txtheader">Model</div>
          <ul className="list-menu">
            <li>
              <Link to="/dashboard/model">
                <i className="bi bi-front icon-admin"></i>Models
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-model">
                <i className="bi bi-plus-square-fill icon-admin"></i>Add Model
              </Link>
            </li>
          </ul>
          <div className="txtheader">Branch</div>
          <ul className="list-menu">
            <li>
              <Link to="# ">
                <i className="bi bi-geo-alt-fill icon-admin"></i>Branchs
              </Link>
            </li>
          </ul>
          <div className="txtheader">Manage</div>
          <ul className="list-menu">
            <li>
              <Link to="# ">
                <i className="bi bi-person-fill icon-admin"></i>Users
              </Link>
            </li>
            <li>
              <Link to="# ">
                <i className="fas fa-file-invoice icon-admin"></i>Invoices
              </Link>
            </li>
          </ul>
          <div className="txtheader">Statistical</div>
          <ul className="list-menu">
            <li>
              <Link to="# ">
                <i className="fas fa-chart-line icon-admin"></i>Profit
              </Link>
            </li>
            <li>
              <Link to="# ">
                <i className="bi bi-bar-chart-fill icon-admin"></i>Product
              </Link>
            </li>
          </ul>
          <hr style={{ color: "#C4C4C4" }} />
          <div className="txtheader">Other</div>
          <ul className="list-menu">
            <li>
              <Link to="# ">
                <i className="bi bi-gear-fill icon-admin"></i>Setting
              </Link>
            </li>
            <li>
              <Link to="# ">
                <i className="bi bi-box-arrow-left icon-admin"></i>Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="col">
        <Switch>
            <Route exact path="/dashboard/brand">
              <FragmentBrandPage />
            </Route>
          </Switch>
      </div> */}
    </div>
    // </Router>
  );
};

export default AdminMenu;
