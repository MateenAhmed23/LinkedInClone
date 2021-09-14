import React from "react";

// CSS
import "../assets/styles/FeedsInputOptions.css";

const FeedsInputOption = ({ title, Icon, color }) => {
  return (
    <div className="single_option_container">
      {Icon && <Icon style={{ color }} />}
      {title && <h5>{title}</h5>}
    </div>
  );
};

export default FeedsInputOption;
