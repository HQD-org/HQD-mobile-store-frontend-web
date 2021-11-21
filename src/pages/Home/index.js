/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Advertise from "./components/Advertise";
import Introduction from "./components/Introduction";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";
import Sale from "./components/Sale";
import Trending from "./components/Trending";

const HomePage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  }, []);
  return (
    <div>
      <nav id="navbar-HQDlist" className="navbar px-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link nav-home" href="#introduction">
              Introduction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-home" href="#trending">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-home" href="#promotion">
              Promotion
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-home" href="#products">
              Products
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-HQDlist"
        data-bs-offset="0"
        className="scrollspy"
        tabIndex="0"
      >
        <div className="container">
          <div id="introduction">
            <Introduction />
          </div>
          <div id="trending">
            <Trending />
          </div>

          <div id="promotion">
            <Sale />
          </div>

          <div id="products">
            <NewProduct />
            <Product />
            <Product />
            <Product />
            <Advertise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
