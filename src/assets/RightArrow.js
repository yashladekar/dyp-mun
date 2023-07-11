import React from "react";
import styled from "styled-components";

import { colors } from "../vars/globalVars";

const Svg = styled.svg`
  width: 18px;
  height: 8px;
  margin-left: 10px;
`;

const RightArrow = (props) => {
  return (
    <Svg viewBox="0 0 18 8">
      <g
        stroke={props.color || colors.darkTomato}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <path d="M16 4H1M17 4l-4-4M13 8l4-4" />
      </g>
    </Svg>
  );
};

export default RightArrow;
