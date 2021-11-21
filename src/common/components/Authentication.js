/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuthAction } from "../../redux/actions/Auth/authActions";
import WaitingBackground from "./WaitingBackground";

const Authentication = (
  SpecificComponent,
  requiredAuth = true, // required auth if true
  adminRoute = false, // required role admin or manager branch if true
  option = false // if auth and true, return home
) => {
  function CheckAuthentication(props) {
    const user = useSelector((state) => state.auth.user);
    const [doneGetAuth, setDontGetAuth] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
      const fetchAuth = async () => {
        const res = await dispatch(getAuthAction());
        setDontGetAuth(true);
        if (res && !res.isAuth) {
          if (requiredAuth) {
            history.push("/login");
          }
          return;
        }
        //đã đăng nhập
        console.log("log at ==> Authentication.js ==> line 22 ===> res: ", res);
        if (adminRoute) {
          if (res.role !== "admin" && res.role !== "manager branch") {
            //khong phai admin
            history.push("/");
            return;
          }
        } else {
          if (res.role === "admin" || res.role === "manager branch") {
            history.push("/dashboard");
            return;
          }
          if (option === true) {
            history.push("/");
            return;
          }
        }
      };

      fetchAuth();
    }, []);
    return (
      <WaitingBackground
        {...props}
        SpecificComponent={SpecificComponent}
        doneGetAuth={doneGetAuth}
        user={user}
      />
    );
  }
  return CheckAuthentication;
};

export default Authentication;
