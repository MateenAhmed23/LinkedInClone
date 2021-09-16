import React from "react";

import "../assets/styles/FeedPost.css";

const FeedPosts = ({ Message, Avatar, Description, Name }) => {
  return <div className="feed_post_container">{Message}</div>;
};

export default FeedPosts;
