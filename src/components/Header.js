import React from "react";

// Import Images
import LinkedInLogo from "../assets/images/linkedInLogo.png";
import Avatar from "../assets/images/avatar.jpg";

// Import Css file
import "../assets/styles/Header.css";

// Icons from Material UI
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";

// Components

import HeaderOptions from "./HeaderOptions";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src={LinkedInLogo} alt="LinkedIn Logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={PeopleAltIcon} title="My Networks" />
        <HeaderOptions Icon={WorkIcon} title="Jobs" />
        <HeaderOptions Icon={MessageIcon} title="Messages" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions Avatar={Avatar} />
      </div>
    </div>
  );
};

export default Header;
