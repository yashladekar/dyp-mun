import React from 'react';
import { PageSeparator } from "../pages/MobileHome";
import { colors } from "../vars/globalVars";
import styled from "styled-components";
import CrownIcon3 from "../components/Gallery";

const Hero = styled.p`
padding: 0 25% 0 15%;
font-family: "Belwe";
font-weight: 500;
font-size: 40px;
letter-spacing: 0px;
color: ${props => props.color || colors.white};
margin: 0 0 0 -8px;
padding: 0;
  
  .dash {
    margin-right: 5px;
  }
`;


const Sidekick = styled.p`
  padding: 0 25% 0 15%;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.color || colors.white};
  margin: 0;
  padding: 0;
`;

const Icon = styled.div`
`;

const Players = ({ setHeaderColor }) => (
  <div
    className="mobile-content"
    style={{textAlign: 'center'}}
  >
    <Icon id="GalleryCrownIcon3">
      <CrownIcon3 />
    </Icon>
    <Hero id="GalleryHero3" color={colors.teal}>
            Enrolled in SPPU
          </Hero>
          <Sidekick id="GallerySidekick3" color={colors.teal}>
            ELIGIBILITY
          </Sidekick>
    <PageSeparator
      position={{position: 'absolute', bottom: 50}}
      onEnterViewport={() => setHeaderColor(colors.teal)}
    />
  </div>
);

export default Players;
