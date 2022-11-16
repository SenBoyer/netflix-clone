// import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
// import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
// import Notifications from "@mui/icons-material/Notifications";
// import Search from "@mui/icons-material/Search";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../contextApi";
import Dropdown from "./Dropdown.js";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile } = useContext(userContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      {!isMobile && (
        <div className="container">
          <div className="left">
            <img src="https://i.imgur.com/pHpvgQc.png" alt="" />
            <Link to="/">
              <span className="link ">Homepage</span>
            </Link>
            <Link to="/series">
              <span className="link ">Series</span>
            </Link>
            <Link to="/movies">
              <span className="link ">Movies</span>
            </Link>
            <Link to="/newpopular">
              <span>New and Popular</span>
            </Link>
            <Link to="/mylist">
              <span>My List</span>
            </Link>
          </div>
          <div className="right">
            <Search className="icon" />
            <span>KIDS</span>
            <Notifications className="icon" />
            <img
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="mobile-nav-container">
          <div className="mobile-nav">
            <img
              className="mobile-image"
              src="https://i.imgur.com/pHpvgQc.png"
              alt=""
            />
            <Dropdown />
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
