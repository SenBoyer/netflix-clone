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
        <Route
          path="/netflix-clone-front/netflix-clone-front/register"
          element={<Register />}
        />
        <Route
          path="/netflix-clone-front/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/netflix-clone-front/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        {user && (
          <>
            <Route
              path="/netflix-clone-front/movies"
              element={<Home type={"movie"} />}
            />
            <Route
              path="/netflix-clone-front/series"
              element={<Home type={"series"} />}
            />
            <Route path="/netflix-clone-front/watch" element={<Watch />} />
            <Route
              path="/netflix-clone-front/newpopular"
              element={<NewSection />}
            />
            <Route path="/netflix-clone-front/mylist" element={<MyList />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
