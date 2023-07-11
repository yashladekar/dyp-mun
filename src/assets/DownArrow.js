import React from "react";

import { colors } from "../vars/globalVars";

export default class DownArrow extends React.Component {
  render() {
    return (
      <svg width={10} height={17}>
        <g
          stroke={colors.darkTeal}
          fill="none"
          fillRule="evenodd"
          strokeLinecap="square">
          <path d="M5 16V1M5 17l-4-4M9 13l-4 4" />
        </g>
      </svg>
    );
  }
}
