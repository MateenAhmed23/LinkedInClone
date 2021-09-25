import React, { useState } from "react";

// css
import "../assets/styles/Login.css";

// Firebase
import { auth } from "../server/firestore";

// Redux

import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [loginPage, setLoginPage] = useState(true);

  const [fullName, setFullName] = useState("");
  const [profileURL, setProfileURL] = useState("");
  const [email, setEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginHandler = async () => {
    try {
      const userAuth = await auth.signInWithEmailAndPassword(
        loginEmail,
        loginPassword
      );

      dispatch(
        login({
          email: userAuth.user.email,
          fullName: userAuth.user.displayName,
          profileURL: userAuth.user.photoURL,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const signUpHandler = async () => {
    if (fullName !== "" && email !== "" && password !== "") {
      try {
        const userAuth = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        // Save additional Info
        await userAuth.user.updateProfile({
          displayName: fullName,
          photoURL: profileURL,
        });

        dispatch(
          login({
            email: userAuth.user.email,
            fullName: userAuth.user.displayName,
            profileURL: userAuth.user.photoURL,
          })
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="login_container">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt="LinkedIn Clone"
      />
      {loginPage ? (
        <>
          <form>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Enter Email"
              autoComplete="off"
            />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </form>
          <button onClick={loginHandler}>Login</button>
          <p>
            Are you a new user?{" "}
            <span className="register_link" onClick={() => setLoginPage(false)}>
              Register Now
            </span>
          </p>
        </>
      ) : (
        <>
          <form>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Full Name"
            />
            <input
              type="text"
              value={profileURL}
              onChange={(e) => setProfileURL(e.target.value)}
              placeholder="Enter Profile URL"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </form>
          <button onClick={signUpHandler}>Sign Up</button>
          <p>
            Already have an account?{" "}
            <span className="register_link" onClick={() => setLoginPage(true)}>
              Login
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
