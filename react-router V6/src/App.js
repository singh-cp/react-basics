import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Profile from "./pages/Profile.js";
import ViewProfile from "./pages/EditProfile.js";
import EditProfile from "./pages/ViewProfile.js";
import SingleProfile from "./pages/SingleProfile.js";
import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  // Dummy login-logout
  const [login, setLogin] = useState(false);
  return (
    <div className="container mx-auto m-2">
      {/* Login-Logout Button*/}
      <button
        className={`btn ${login ? "btn-danger" : "btn-success"}`}
        onClick={() => {
          setLogin(!login);
        }}
      >
        {login ? "Logout" : "Login"}
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login user={login} />} />
        {/* Protecting Route Through Navigate at routing*/}
        <Route
          path="dashboard-redirect"
          element={
            login ? <Dashboard user={login} /> : <Navigate to="/login" />
          }
        />
        {/* Protecting Route Conditional rendering*/}
        <Route
          path="dashboard-login"
          element={login ? <Dashboard user={login} /> : <Login user={login} />}
        />
        <Route path="dashboard" element={<Dashboard user={login} />} />
        {/* Nested Routing*/}
        <Route path="profile" element={<Profile />}>
          <Route path="edit-profile" element={<ViewProfile />} />
          <Route path="view-profile" element={<EditProfile />} />
          {/* Dynamic Routing with nested routing*/}
          <Route path=":profileId" element={<SingleProfile />} />
        </Route>
        {/* Protecting using children prop*/}
        <Route
          path="dashboard-chilren"
          element={
            <ProtectedRoute user={login}>
              <Dashboard user={login} />
            </ProtectedRoute>
          }
        />
        {/* 404 Page*/}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
