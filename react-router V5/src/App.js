import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";
import Post from "./pages/Post";
import Secure from "./pages/Secure";
import { useState } from "react";

function App() {
  // Dummy login-logout
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      {/* Solving Scroll to top issue */}
      <ScrollToTop />
      <Header />
      <div className="container text-center p-3">
        {/* Login-Logout Button */}
        <button
          className={`btn ${login ? "btn-danger" : "btn-success"}`}
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login ? "Logout" : "Login"}
        </button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          {/* Creating Secure urls */}
          <Route path="/secure" login={login}>
            {login ? <Secure /> : <Redirect to="/" />}
          </Route>
          {/* Creating Dynamic urls, query params & params */}
          <Route path="/post/:id" component={Post} />
          {/* 404 Page Not Found */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
