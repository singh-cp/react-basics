import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

function Profile() {
  const { path, url } = useRouteMatch();
  // url extracts the currenct url path of the page
  // path takes the param path of the url
  return (
    <div>
      <h1> Profile Page</h1>
      <Link to={`${url}/view-profile`} className="btn btn-warning m-2">
        View Profile
      </Link>
      <Link to={`${url}/edit-profile`} className="btn btn-warning m-2">
        Edit Profile
      </Link>
      {/* Creating Nested Routes */}
      <Switch>
        <Route path={`${path}/view-profile`} component={ViewProfile}></Route>
        <Route path={`${path}/edit-profile`} component={EditProfile}></Route>
      </Switch>
    </div>
  );
}

export default Profile;
