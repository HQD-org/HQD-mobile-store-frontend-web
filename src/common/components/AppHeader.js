/* eslint-disable react-hooks/exhaustive-deps */
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import React, { useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom";
import "../../common/css/Header.Style.css";
import logoHQD from "../../common/images/logoHQD.png";
import { logoutAction } from "../../redux/actions/Auth/authActions";
import {
  getCartAction,
  getCartGuestAction,
} from "../../redux/actions/Cart/cartAction";
import "../css/AdminHeader.Style.css";
import imgBackground from "../images/background-header-1.jpg";
import { useLocation } from "react-router-dom";

const AppHeader = () => {
  const show = useSelector((state) => state.system.showHeaderAndFooter);
  const itemsInCart = useSelector((state) => state.cart.items);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const handleLogout = async () => {
    await dispatch(logoutAction());
    history.push("/login");
  };

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setSearchTerm("");
    if (location.pathname === "/product") {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      if (params.name) {
        setSearchTerm(params.name);
      }
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      const getCart = async () => {
        await dispatch(getCartAction());
      };
      getCart();
      return;
    }
    const getCartGuest = async () => {
      await dispatch(getCartGuestAction());
    };
    getCartGuest();
  }, [isLogin]);

  useEffect(() => {
    if (itemsInCart) {
      const totalProduct = itemsInCart.reduce((init, item) => {
        return init + item.quantity;
      }, 0);
      setTotalQuantity(totalProduct);
      return;
    }
    setTotalQuantity(0);
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
    let url = `/product?itemPerPage=16&page=1`;
    if (searchTerm) {
      url += `&name=${searchTerm}`;
    }
    history.push(url);

    if (location.pathname === "/product") {
      history.go(0);
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
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
                value={searchTerm}
                onChange={onChangeSearch}
                onKeyPress={onKeyPress}
              />
            </div>

            <div>
              <Badge
                badgeContent={totalQuantity > 0 ? totalQuantity : ""}
                invisible={totalQuantity > 0 ? false : true}
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
