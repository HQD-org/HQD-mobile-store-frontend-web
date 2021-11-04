import React from "react";
import logoHQD from "../../common/images/logoHQD.png";
import "../css/AdminHeader.Style.css";
import ava from "../../common/images/ava.png";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const AdminHeader = (props) => {
  return (
    <div>
      <Navbar className="nav-header" light expand="md">
        <a className="navbar-brand name-store" href="# ">
          <img src={logoHQD} alt="logo" width="20%" /> HQD Mobile
        </a>

        <Collapse
          navbar
          style={{ justifyContent: "flex-end", marginRight: "50px" }}
        >
          <Nav className="mr-auto" navbar>
            <NavItem className="input-search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </NavItem>
            <NavItem className="announce">
              <i class="bi bi-bell-fill"></i>
            </NavItem>
            <img className="ava-admin" src={ava} alt="" width="40px" />
            <UncontrolledDropdown nav inNavbar style={{ color: "white" }}>
              <DropdownToggle nav caret>
                Admin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Log out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AdminHeader;
