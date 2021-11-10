import React from "react";
import Introduction from "./components/Introduction";
import Trending from "./components/Trending";
import Sale from "./components/Sale";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";
import Advertise from "./components/Advertise";

const HomePage = () => {
  return (
    <div>
      <nav id="navbar-HQDlist" class="navbar px-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link nav-home" href="#introduction">
              Introduction
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-home" href="#trending">
              Trending
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-home" href="#promotion">
              Promotion
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-home" href="#products">
              Products
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-HQDlist"
        data-bs-offset="0"
        class="scrollspy"
        tabindex="0"
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
