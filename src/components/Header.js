import React, { Component } from "react";
import { Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Button outline color="danger">
          Min
        </Button>
      </div>
    );
  }
}

export default Header;
