import React from 'react';
import { PageSeparator } from "../pages/MobileHome";
import { colors } from "../vars/globalVars";
import StayInTouch from "../components/StayInTouch";

const GetCloser = ({ setHeaderColor}) => (
  <div className="mobile-content">
    <StayInTouch isMobile />
    <PageSeparator
      position={{position: 'absolute', bottom: 50}}
      onEnterViewport={() => setHeaderColor(colors.brown)}
    />
  </div>
);

export default GetCloser;
