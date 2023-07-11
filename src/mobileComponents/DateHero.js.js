import React from "react";
import { PageSeparator } from "../pages/MobileHome";
import { colors } from "../vars/globalVars";
import styled from "styled-components";
import CrownIcon2 from "../components/Gallery";

const Hero = styled.p`
  padding: 0 25% 0 15%;
  font-family: "Belwe";
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 0px;
  color: ${(props) => props.color || colors.white};
  margin: 0 0 0 -8px;
  padding: 0;
`;

const Sidekick = styled.p`
  padding: 0 25% 0 15%;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.color || colors.white};
  margin: 0;
  padding: 0;
`;

const Icon = styled.div``;

const WinningCards = ({ setHeaderColor }) => (
  <div className="mobile-content" style={{ textAlign: "center" }}>
    <Icon id="GalleryCrownIcon2">
      <CrownIcon2 />
    </Icon>
    <Hero id="GalleryHero2" color={colors.darkTomato}>
      27th Jan 2023
    </Hero>
    <Sidekick id="GallerySidekick2" color={colors.darkTomato}>
      Date
    </Sidekick>
    <PageSeparator
      position={{ position: "absolute", bottom: 50 }}
      onEnterViewport={() => setHeaderColor(colors.darkTomato)}
    />
  </div>
);

export default WinningCards;
