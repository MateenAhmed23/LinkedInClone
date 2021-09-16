import React, { useState, useEffect } from "react";
import FeedPosts from "./FeedPosts";
import FeedsInput from "./FeedsInput";

import { db } from "../server/firestore";

const Feed = () => {
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          Message: doc.data().Message,
          Avatar: doc.data().Avatar,
          Description: doc.data().Description,
          Name: doc.data().Name,
        }))
      )
      .then((posts) => {
        setFeedPosts(posts);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(feedPosts);
  }, [feedPosts]);
  return (
    <div className="feeds_container">
      <FeedsInput />
      {feedPosts &&
        feedPosts.map((post) => (
          <FeedPosts
            Message={post.Message}
            Avatar={post.Avatar}
            Description={post.Description}
            Name={post.Name}
          />
        ))}
    </div>
  );
};

export default Feed;
