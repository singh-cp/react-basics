import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  });
  return (
    <div>
      <p>I am Login</p>
    </div>
  );
}

export default Login;
