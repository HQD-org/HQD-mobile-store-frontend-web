import React from "react";
import { ToastContainer } from "react-toastify";
import Routers from "./routers";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  );
};

export default App;
