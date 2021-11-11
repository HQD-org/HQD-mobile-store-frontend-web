/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuthAction } from "../../redux/actions/Auth/authActions";

const Authentication = (SpecificComponent, option, adminRoute = false) => {
  function CheckAuthentication(props) {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
      const fetchAuth = async () => {
        const res = await dispatch(getAuthAction());
        if (res && !res.isAuth) {
          if (option) {
            history.push("/login");
          }
          return;
        }
        //đã đăng nhập
        console.log("log at ==> Authentication.js ==> line 22 ===> res: ", res);
        if (res.role !== "admin" && res.role !== "manager branch") {
          //khong phai admin
          if (adminRoute) {
            history.push("/");
          }
          return;
        }
        //la admin
        if (!adminRoute) {
          history.push("/dashboard");
        }
        return;
      };
      fetchAuth();
    }, []);
    return <SpecificComponent {...props} user={user} />;
  }
  return CheckAuthentication;
};
export default Authentication;
