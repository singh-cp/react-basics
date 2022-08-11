import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Secure({ login }) {
  // Another way of making routes protected (Not recommended because this will return the element & then redirect)
  let history = useHistory();
  useEffect(() => {
    if (login === false) {
      history.push("/login"); // Redirect to home page
    }
  }, [login, history]);
  console.log("I am Secure");
  return (
    <React.Fragment>
      {console.log("Inside return Secure")}
      <h1>This Page is Secure.</h1>
    </React.Fragment>
  );
}

export default Secure;
