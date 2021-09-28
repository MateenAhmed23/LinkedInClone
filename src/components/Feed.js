import React, { useState, useEffect } from "react";
import FeedPosts from "./FeedPosts";
import FeedsInput from "./FeedsInput";

import { db } from "../server/firestore";

// FlipMove
import FlipMove from "react-flip-move";

const Feed = () => {
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    // Not real time

    // db.collection("posts")
    //   .get()
    //   .then((result) => result.docs)
    //   .then((docs) =>
    //     docs.map((doc) => ({
    //       Message: doc.data().Message,
    //       AvatarURL: doc.data().Avatar,
    //       Description: doc.data().Description,
    //       Name: doc.data().Name,
    //     }))
    //   )
    //   .then((posts) => {
    //     setFeedPosts(posts);
    //   })
    //   .catch((err) => console.log(err));

    // Real time
    db.collection("posts")
      .orderBy("publishedAt", "desc")
      .onSnapshot((snapshot) =>
        setFeedPosts(
          snapshot.docs.map((doc) => ({
            Message: doc.data().Message,
            AvatarURL: doc.data().Avatar,
            Description: doc.data().Description,
            Name: doc.data().Name,
            id: doc.id,
          }))
        )
      );
  }, []);

  return (
    <div className="feeds_container">
      <FeedsInput />
      <FlipMove>
        {feedPosts &&
          feedPosts.map((post, index) => (
            <FeedPosts
              key={post.id}
              Message={post.Message}
              AvatarURL={post.AvatarURL}
              Description={post.Description}
              Name={post.Name}
            />
          ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
