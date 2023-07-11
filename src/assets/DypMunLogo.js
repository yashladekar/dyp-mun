import React from "react";

// import { colors } from "../vars/globalVars";
import DypMunLogoImg from "../assets/img/DypMunLogo.png";

const DypMunLogo = (props) => {
  let width = "auto",
    height = 245;

  if (props.xsmall) {
    height = 65;
  }

  if (props.mobile) {
    height = 74;
  }

  if (props.small) {
    height = 20;
  }

  return (
    <img
      id="DypMunLogo"
      className="DypMunLogo"
      src={DypMunLogoImg}
      style={{ width, height }}
      alt="logo"
    />
  );
};

export default DypMunLogo;
