import { Avatar } from "@material-ui/core";
import React from "react";

// CSS
import "../assets/styles/Sidebar.css";

// Assets
import BackgroundImage from "../assets/images/bgimage.jfif";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const RecentItems = ({ title }) => {
    return (
      <div>
        <p className="hashtags">#{title}</p>
      </div>
    );
  };
  return (
    <div className="sidebar_left_main">
      <div className="sidebar_left">
        <img src={BackgroundImage} alt="Background of profile" />
        <div className="avatar">
          {user.profileURL !== "" ? (
            <Avatar src={user.profileURL}>{user.fullName} </Avatar>
          ) : (
            <Avatar />
          )}
        </div>
        <div style={{ borderBottom: "0.1px solid #dfdedb" }}>
          <h4>{user.fullName}</h4>
          <p>{user.email}</p>
        </div>
        <div className="sidebar_left_stats">
          <p className="display_stats">Who viewed your profile</p>
          <p className="number_stats">51</p>
        </div>
        <div className="sidebar_left_stats">
          <p className="display_stats">Views of your post</p>
          <p className="number_stats">138</p>
        </div>
      </div>
      <div className="sidebar_left_recent">
        <h4>Recents</h4>
        <RecentItems title="Career Join" />
        <RecentItems title="Dubai Recruitment" />
        <RecentItems title="Islamabad" />
        <RecentItems title="Lahore" />
        <RecentItems title="ios" />
      </div>
    </div>
  );
};

export default Sidebar;
