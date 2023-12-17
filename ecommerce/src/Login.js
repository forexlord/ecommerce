import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          if (auth) {
            navigate("/");
          }
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="./images/ecommerce.png" />
      </Link>
      <div className="login__container">
        <h1>sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} className="login__sigInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to Ecommerce Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          create your Ecommerce account
        </button>
      </div>
    </div>
  );
}

export default Login;
