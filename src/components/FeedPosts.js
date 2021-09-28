import React, { forwardRef } from "react";

import "../assets/styles/FeedPost.css";

import { Avatar } from "@material-ui/core";

// Component
import FeedsInputOption from "./FeedsInputOption";

// Material UI

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const FeedPosts = forwardRef(
  ({ Message, AvatarURL, Description, Name }, ref) => {
    return (
      <div ref={ref} className="feed_post_container">
        <div className="feed_post_header">
          {AvatarURL === "" ? <Avatar /> : <Avatar src={AvatarURL} />}
          <div className="feed_post_heading">
            <h5>{Name}</h5>
            <p>{Description}</p>
          </div>
        </div>
        <p>{Message}</p>
        <div className="input_options_container">
          <FeedsInputOption
            title="Like"
            Icon={ThumbUpAltIcon}
            color="#A9A9A9"
          />
          <FeedsInputOption
            title="Comment"
            Icon={CommentIcon}
            color="#A9A9A9"
          />
          <FeedsInputOption title="Share" Icon={ShareIcon} color="#A9A9A9" />
          <FeedsInputOption title="Send" Icon={SendIcon} color="#A9A9A9" />
        </div>
      </div>
    );
  }
);

export default FeedPosts;
