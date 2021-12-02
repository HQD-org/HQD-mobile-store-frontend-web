import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Profile from "./components/Profile";

const ProfilePage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  });

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
