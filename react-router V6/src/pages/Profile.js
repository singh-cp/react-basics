import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      <Link to="edit-profile" className="btn btn-warning m-2">
        Edit Profile
      </Link>
      <Link to="cp-singh" className="btn btn-warning m-2">
        My Profile
      </Link>
      <Link to="view-profile" className="btn btn-warning m-2">
        View Profile
      </Link>
      <Outlet />
    </div>
  );
}

export default Profile;
