import React from "react";
import "./dropdown.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
function Dropdown() {
  return (
    <>
      <div classNameName="menu-container">
        <nav>
          <ul className="menu">
            <li
              className="dropdown dropdown-6"
              style={{
                position: "absolute",
                top: "18px",
                left: "279px",
                borderRadius: "8px",
              }}
            >
              <MenuIcon />
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <Link to="/netflix-clone-front/movies">
                  <li className="dropdown_item-1">Movies</li>
                </Link>
                <Link to="/netflix-clone-front/series">
                  <li className="dropdown_item-2">Series</li>
                </Link>
                <Link to="/netflix-clone-front/newpopular">
                  <li className="dropdown_item-3">Popular</li>
                </Link>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Dropdown;
