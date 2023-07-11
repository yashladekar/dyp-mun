import React from "react";

import { colors } from "../vars/globalVars";

const UpArrow = () => {
  return (
    <svg width={10} height={17}>
      <g
        stroke={colors.darkTeal}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <path d="M5 1v15M5 0L1 4M9 4L5 0" />
      </g>
    </svg>
  );
};

export default UpArrow;
