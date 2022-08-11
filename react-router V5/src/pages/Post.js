import React from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

function Post() {
  // Extract params from url
  const myParams = useParams();
  // Extract query params from url
  const query = new URLSearchParams(useLocation().search);
  // Difference between path & url (Nested Routing Concept)
  const { path, url } = useRouteMatch();
  console.log({ path: path });
  console.log({ url: url });
  return (
    <div>
      <h1>Post Page</h1>
      <h2>Post id ={myParams.id}</h2>
      <h2>Post query ={query.get("name")}</h2>
      <h2>Post query ={query.get("surname")}</h2>
    </div>
  );
}

export default Post;
