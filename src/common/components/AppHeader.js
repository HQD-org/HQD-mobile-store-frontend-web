import React from "react";
import logoHQD from "../../common/images/logoHQD.png";
import imgGirl from "../../common/images/background.png";
import imgST from "../../common/images/oppo-header.png";
import background from "../../common/images/background-header-2.png";
import "../../common/css/Header.Style.css";

const AppHeader = () => {
  return (
    <nav>
      <div className="navbar navbar-light">
        <div className="container-fluid" style={{ alignItems: "baseline" }}>
          {" "}
          <div className="col-7 logo">
            <a className="navbar-brand name-store" href="# ">
              <img src={logoHQD} alt="logo" width="20%" /> HQD Mobile
            </a>
            <a className="nav-link" href="# ">
              Home
            </a>
            <a className="nav-link" href="# ">
              About us
            </a>
            <a className="nav-link" href="# ">
              Question
            </a>
            <a className="nav-link" href="# ">
              Contact
            </a>
          </div>
          <div
            className="col-4"
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <form>
              <input
                className="form-control search-header"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <i class="bi bi-search icon-search"></i> */}
            </form>
            <button button type="button" class="btn">
              <i class="bi bi-person-circle icon-user"></i>
            </button>

            <button button type="button" class="btn btn-cart">
              {" "}
              <i class="bi bi-cart-fill icon-cart"></i>Cart
            </button>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{
            alignItems: "baseline",
            paddingBottom: "20px",
            color: "white",
            backgroundPosition: "right",
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="col" style={{ textAlign: "center" }}>
            <img src={imgGirl} alt="" width="60%" />
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <h1>Modern Teachnology</h1>
            <h2>Connecting all things</h2>
            <button type="button" className="btnGet">
              Get Started
            </button>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <img src={imgST} alt="" width="60%" style={{ marginTop: "25px" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
