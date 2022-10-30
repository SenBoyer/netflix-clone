import React from "react";
import { Link } from "react-router-dom";
import Register from "../../pages/register/Register";
import Navbar from "../navbar/Navbar";
import "./MyList.scss";

function MyList() {
  return (
    <>
      <Navbar />
      <div className="mylist-wrapper">
        <div id="text">Create an account to create your own lists!</div>
        <Link to="/register" element={<Register />}>
          <span id="span">Register Now!</span>
        </Link>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-3ad1f.appspot.com/o/mylists.webp?alt=media&token=3bfc1c38-6678-4042-82f8-1dd672e25d41"
          alt="YourOwnLists.jpg"
        />
      </div>
    </>
  );
}

export default MyList;
