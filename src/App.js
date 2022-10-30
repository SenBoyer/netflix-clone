import "./App.scss";
import Home from "./pages/home/Home";
import React, { useState, useContext } from "react";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NewSection from "./components/newAndPopular/NewAndPopular";
import { userContext } from "./contextApi";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyList from "./components/mylist/MyList";

function App() {
  const { user } = useContext(userContext);
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type={"movie"} />} />
            <Route path="/series" element={<Home type={"series"} />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/newpopular" element={<NewSection />} />
            <Route path="/mylist" element={<MyList />} />
          </>
        )}
      </Routes>
    </Router>
    // <GetIMDB />
  );
}

export default App;
