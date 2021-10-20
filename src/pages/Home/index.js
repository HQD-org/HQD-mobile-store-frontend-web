import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <span>
        <Link
          to="/register"
          style={{ color: "#3fa5ef", textDecoration: "none" }}
        >
          Sign up now
        </Link>
      </span>
      <span>
        <Link to="/login" style={{ color: "#3fa5ef", textDecoration: "none" }}>
          Login now
        </Link>
      </span>
      <span>
        <Link
          to="/dashboard"
          style={{ color: "#3fa5ef", textDecoration: "none" }}
        >
          Dashboard
        </Link>
      </span>
    </div>
  );
};

export default HomePage;
