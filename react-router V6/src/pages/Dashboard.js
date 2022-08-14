import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ user }) {
  // Protecting routes using useNavigate (Not a clean way of protecting)
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <div>
      <h1>I am Dashboard Protected Route</h1>
    </div>
  );
}

export default Dashboard;
