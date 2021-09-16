import React, { useState } from "react";

import { Avatar } from "@material-ui/core";

// Components
import FeedsInputOption from "./FeedsInputOption";

// CSS
import "../assets/styles/Feeds.css";

// Material UI

import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AssignmentIcon from "@material-ui/icons/Assignment";

// Database

import { db } from "../server/firestore";

const FeedsInput = () => {
  const [enteredPost, setEnteredPost] = useState("");

  const inputChangeHandler = (e) => {
    setEnteredPost(e.target.value);
  };
  const createPostHandler = (e) => {
    e.preventDefault();

    db.collection("posts")
      .add({
        postMessage: enteredPost,
      })
      .then(() => {
        alert("Data saved successfully");
      })
      .catch(() => {
        alert("Oops, there was a error saving data");
      });
  };
  return (
    <div className="feeds_input_container">
      <div className="feeds_input_write_post">
        <Avatar />
        <div className="feeds_input_text_container">
          <form>
            <input
              type="text"
              className="text_input"
              placeholder="Start a post"
              value={enteredPost}
              onChange={inputChangeHandler}
            />
            <input
              type="submit"
              onClick={createPostHandler}
              style={{ display: "none" }}
            />
          </form>
        </div>
      </div>
      <div className="input_options_container">
        <FeedsInputOption title="Photo" Icon={PhotoIcon} color="#70B5F9" />
        <FeedsInputOption title="Video" Icon={YouTubeIcon} color="#7FC15E" />
        <FeedsInputOption
          title="Event"
          Icon={EventAvailableIcon}
          color="#E7133A"
        />
        <FeedsInputOption
          title="Write Article"
          Icon={AssignmentIcon}
          color="#FC9295"
        />
      </div>
    </div>
  );
};

export default FeedsInput;
