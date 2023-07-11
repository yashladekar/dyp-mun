import React from "react";
import styled from "styled-components";

import { colors } from "../vars/globalVars";

import CrownIcon1 from "../assets/CrownIcon1";
import CrownIcon2 from "../assets/CrownIcon2";
import CrownIcon3 from "../assets/CrownIcon3";

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  display: none;
`;

const Page = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Hero = styled.p`
  padding: 0 25% 0 15%;
  font-family: "Belwe";
  font-weight: 500;
  font-size: 60px;
  letter-spacing: -8px;
  color: ${(props) => props.color || colors.white};
  margin: 0 0 0 -8px;
  padding: 0;

  .dash {
    margin-right: 27px;
    margin-left: 20px;
  }

  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 212px;
    letter-spacing: -2px;
  }
`;

const Sidekick = styled.p`
  padding: 0 25% 0 15%;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.color || colors.white};
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const Icon = styled.div`
  @media (min-width: 768px) {
    margin-bottom: -60px;
  }
`;

export default class Gallery extends React.Component {
  render() {
    return (
      <Container id="Gallery">
        <Page>
          <Icon id="GalleryCrownIcon1">
            <CrownIcon1 />
          </Icon>
          <Hero id="GalleryHero1" color={colors.darkTomato}>
            DY. Patil Techincal Campus, Ambi
          </Hero>
          <Sidekick id="GallerySidekick1" color={colors.darkTomato}>
            Location
          </Sidekick>
        </Page>
        <Page>
          <Icon id="GalleryCrownIcon2">
            <CrownIcon2 />
          </Icon>
          <Hero id="GalleryHero2" color={colors.darkTomato}>
            27th Jan 2023
          </Hero>
          <Sidekick id="GallerySidekick2" color={colors.darkTomato}>
            Date
          </Sidekick>
        </Page>
        <Page>
          <Icon id="GalleryCrownIcon3">
            <CrownIcon3 />
          </Icon>
          <Hero id="GalleryHero3" color={colors.teal}>
            Enrolled in SPPU
          </Hero>
          <Sidekick id="GallerySidekick3" color={colors.teal}>
            ELIGIBILITY
          </Sidekick>
        </Page>
      </Container>
    );
  }
}
