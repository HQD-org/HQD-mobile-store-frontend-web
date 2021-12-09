/* eslint-disable react-hooks/exhaustive-deps */
import Cookie from "js-cookie";
import React, { useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom";
import "../../common/css/Header.Style.css";
import logoHQD from "../../common/images/logoHQD.png";
import { logoutAction } from "../../redux/actions/Auth/authActions";
import { getCartAction } from "../../redux/actions/Cart/cartAction";
import "../css/AdminHeader.Style.css";
import imgBackground from "../images/background-header-1.jpg";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AppHeader = () => {
  const show = useSelector((state) => state.system.showHeaderAndFooter);
  const itemsInCart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const handleLogout = async () => {
    await dispatch(logoutAction());
    history.push("/login");
  };

  useEffect(() => {
    // const cart = Cookie.get("cart");
    if (isLogin) {
      // if (cart) {
      //   //   merge cart cookies với cart database
      //   // xong xoá cart ở Cookies
      //     Cookie.remove("cart");
      //return;
      // }
      const getCart = async () => {
        await dispatch(getCartAction());
      };
      getCart();
      return;
    }

    // get data product by list id in cart;
  }, [isLogin]);

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
              <Badge
                badgeContent={
                  itemsInCart.length > 0 ? `${itemsInCart.length}` : ""
                }
                invisible={itemsInCart.length > 0 ? false : true}
              >
                <ShoppingCartIcon
                  className="icon-header"
                  onClick={onClickCart}
                  style={{ color: "#3FA5EF", transform: "scaleX(-1)" }}
                />
              </Badge>
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
