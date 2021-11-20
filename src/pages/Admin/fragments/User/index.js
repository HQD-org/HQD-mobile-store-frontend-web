import React from "react";
import UserHeader from "./components/UserHeader";
import Users from "./components/User";

const UserFragment = React.memo(() => {
  return (
    <div>
      <UserHeader />
      <Users />
    </div>
  );
});

export default UserFragment;
