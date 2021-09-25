import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

// Firebase

import { auth } from "./server/firestore";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth.email, userAuth.fullName);
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            fullName: userAuth.fullName,
            profileURL: userAuth.profileURL,
          })
        );
      } else {
        // user is not logged in
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
