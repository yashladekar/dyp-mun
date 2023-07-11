import React, { useEffect } from "react";
import styled from "styled-components";
import { TimelineMax, TweenMax, Power2 } from "gsap";

import { colors } from "../vars/globalVars";

import DypMunLogo from "../assets/DypMunLogo";

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingPage = () => {
  const logoRef = React.createRef();

  useEffect(() => {
    // Set defaultEase
    TweenMax.defaultEase = Power2.easeIn;

    let timeline = new TimelineMax();

    timeline
      .set("#LandingPage .DypMunLogo", {
        scaleX: -1,
        transformOrigin: "50% 50%",
      })
      .fromTo(
        "#LandingPage .DypMunLogo",
        0.5,
        {
          transform: "translateY(-100%)",
          opacity: 0,
          ease: Power2.easeOut,
        },
        {
          transform: "translateY(20px)",
          opacity: 1,
        }
      )
      .to("#LandingPage .DypMunLogo", 0.3, {
        transform: "translateY(0)",
      })
      .to(
        "#LandingPage .DypMunLogo ",
        0.3,
        {
          scaleX: 1,
          transformOrigin: "50% 50%",
        },
        "-=0.3"
      );
  });

  return (
    <Container id="LandingPage">
      <DypMunLogo />
    </Container>
  );
};

export default LandingPage;
