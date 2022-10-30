import "./login.scss";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "../register/Register";
import axios from "axios";
import { userContext } from "../../contextApi";
import { useEffect } from "react";

export default function Login() {
  const history = useNavigate();
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });
  const { setUser, setToken } = useContext(userContext);

  const keypressLogin = ({ key }) => {
    console.log("keypress running");
    if (key === "Enter") {
      axios
        .post("http://localhost:8080/api/auth/login", {
          email: formInfo.email,
          password: formInfo.password,
        })

        .then((response) => {
          setToken(response.data.access_token);
          setUser(true);
          history("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const startLogin = () => {
    axios
      .post("http://localhost:8080/api/auth/login", {
        email: formInfo.email,
        password: formInfo.password,
      })

      .then((response) => {
        setToken(response.data.access_token);
        setUser(true);
        history("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const guestLogin = () => {
    axios
      .post("http://localhost:8080/api/auth/login", {
        email: "admin@admin.com",
        password: "admin",
      })

      .then((response) => {
        setToken(response.data.access_token);
        setUser(true);
        history("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    window.addEventListener("keypress", keypressLogin);
  });

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://i.imgur.com/pHpvgQc.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) =>
              setFormInfo((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormInfo((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
          <button type="button" className="loginButton" onClick={startLogin}>
            Sign In
          </button>
          <button type="button" className="loginButton" onClick={guestLogin}>
            Sign In As Guest!
          </button>
          <span>
            New to Netflix?{" "}
            <Link to="/register" element={<Register />}>
              <b style={{ color: "red" }}>Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}

/*======================================================================*/

// import React, { useState } from "react";

// import Form from "react-bootstrap/Form";

// import Button from "react-bootstrap/Button";

// import "./Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }
