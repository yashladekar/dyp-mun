import React from "react";
import styled from "styled-components";

const MouseScrollIcon = styled.div`
  position: absolute;
  bottom: 30px;
  text-align: center;
  display: none;
  
  @media(min-width: 968px) {
    display: block;
  }
  
  p {
    color: #fff;
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 0;
  }
`;

export default () => (
  <MouseScrollIcon id="MouseScroll">
    <svg width="20px"
         height="30px"
         viewBox="0 0 20 30"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Web-Copy" transform="translate(-710.000000, -1718.000000)">
          <g id="Group-69" transform="translate(710.000000, 1718.000000)">
            <rect id="Rectangle" stroke="#FFFFFF" x="0.5" y="0.5" width="19" height="29" rx="9.5" />
            <circle id="Oval" fill="#FFFFFF" cx="10" cy="7" r="2" />
          </g>
        </g>
      </g>
    </svg>
    <p>Scroll down</p>
  </MouseScrollIcon>
);
