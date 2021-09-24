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
  const [password, setPassword] = useState("");

  const signUpHandler = async () => {
    if (fullName !== "" && email !== "" && password !== "") {
      try {
        const userAuth = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        // Save additional Info
        await userAuth.user.updateProfile({
          fullName,
          profileURL,
        });

        console.log(userAuth.user.email, fullName, profileURL);
        dispatch(
          login({
            email: userAuth.user.email,
            fullName,
            profileURL,
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
          <button>Login</button>
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
