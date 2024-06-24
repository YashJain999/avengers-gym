import React, { useState } from "react";
import { BsCheckCircle, BsCheckCircleFill, BsXCircle, BsXCircleFill } from "react-icons/bs";

const HoverableIcon = ({ iconType }) => {
  const [hover, setHover] = useState(false);

  const getIcon = () => {
    switch (iconType) {
      case "check":
        return hover ? <BsCheckCircleFill /> : <BsCheckCircle />;
      case "cross":
        return hover ? <BsXCircleFill /> : <BsXCircle />;
      default:
        return null;
    }
  };

  return (
    <i
      className="icon-hover"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {getIcon()}
    </i>
  );
};

export default HoverableIcon;
