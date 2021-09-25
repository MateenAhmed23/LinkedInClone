import React from "react";

import "../assets/styles/HeaderOptions.css";

const HeaderOptions = ({ title, Icon, Avatar, SignOut }) => {
  return (
    <>
      <div className="header_item">
        {Icon && <Icon />}
        {title && <div>{title}</div>}
        {Avatar && <img src={Avatar} alt="Profile DP" onClick={SignOut} />}
      </div>
    </>
  );
};

export default HeaderOptions;
