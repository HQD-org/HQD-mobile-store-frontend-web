import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../common/css/Header.Style.css";
import logoHQD from "../../common/images/logoHQD.png";
import imgBackgroundleft from "../images/background-header.jpg";
import imgBackground from "../images/background-header-1.jpg";
import "../css/AdminHeader.Style.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logoutAction } from "../../redux/actions/Auth/authActions";

const AppHeader = () => {
  const show = useSelector((state) => state.system.showHeaderAndFooter);
  const itemsInCart = useSelector((state) => state.cart.items);
  const [totalQuantity, setTotalQuantity] = useState("0");
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const handleLogout = async () => {
    await dispatch(logoutAction());
    history.push("/login");
  };

  useEffect(() => {
    if (itemsInCart.length > 0) {
      const total = itemsInCart.reduce((init, item) => {
        return init + item.quantity;
      }, 0);
      setTotalQuantity(total);
      return;
    }

    setTotalQuantity("0");
  }, [itemsInCart]);

  const DropdownMenu = () => {
    return (
      <div className="dropdown-menu">
        <Link className="dropdown-item " to="/profile">
          {user.name || "Profile"}
        </Link>
        <Link className="dropdown-item " to="/bills">
          Bills
        </Link>
        <Link className="dropdown-item " to="#" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    );
  };

  const onClickUser = () => {
    if (isLogin) {
      history.push("/profile");
    } else {
      history.push("/login");
    }
  };
  const onClickCart = () => {
    history.push("/cart");
  };
  const onClickSearch = () => {
    console.log("log at ==> AppHeader.js ==> line 27 ==> search");
  };
  return show ? (
    <nav>
      <div className="navbar navbar-light">
        <div
          className="container-fluid"
          style={{
            alignItems: "baseline",
          }}
        >
          <div className="col-8 logo">
            <NavLink className="navbar-brand name-store" to="/">
              <img src={logoHQD} alt="logo" width="20%" /> HQD Mobile
            </NavLink>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/product">
              Product
            </NavLink>
            <NavLink className="nav-link" to="/question">
              Question
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
          <div
            className="col-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="icon-header">
              <FaSearch className="icon-search" onClick={onClickSearch} />
              <input
                className="form-control search-header"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>

            <div>
              <FaShoppingCart
                className="icon-header icon-cartHeader"
                onClick={onClickCart}
                style={{ color: "#3FA5EF", transform: "scaleX(-1)" }}
              />
              {totalQuantity > 0 ? (
                <p className="total-quantity">{totalQuantity}</p>
              ) : (
                <p className="total-quantity-none"></p>
              )}
            </div>

            <div className="dropdown icon-header">
              <FaUser
                onClick={onClickUser}
                style={{ marginTop: "-4px", color: "#3FA5EF" }}
              />
              {isLogin && <DropdownMenu />}
            </div>
          </div>
        </div>
      </div>
      <div
        className="row background-header"
        style={{ backgroundImage: `url(${imgBackground})` }}
      >
        <div className="col-6 txtheader-sologan">
          <div>
            <h2 className="txtModern">Modern technology</h2>
            <h3 className="txtConnect">Connecting all things</h3>
            <h4 className="txtConnect">Faster and faster</h4>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <> </>
  );
};

export default AppHeader;
