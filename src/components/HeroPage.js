import React from "react";
import styled from "styled-components";

import { colors } from "../vars/globalVars";

import MouseScroll from "../assets/MouseScroll";
import background from "../assets/img/campus6.jpg";

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${colors.skyBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0 20px;
  transform: translateY(-50%);
  position: absolute;
  top: -100%;
  overflow: hidden;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Hero = styled.h1`
  color: ${colors.white};
  font-size: 40px;
  font-weight: 500;
  line-height: 36px;
  align-self: flex-end;
  width: 90%;
  margin 0 auto;
  @media (min-width: 768px) {
    font-size: 53px;
    line-height: 53px;
  }

  @media (max-width: 768px) {
    font-size:30px
  }

  @media (min-width: 1201px) {
    font-size: 80px;
    line-height: 70px;
  }
`;

const HeroSubtitle = styled.h6`
  color: ${colors.white};
  font-size: 40px;
  font-weight: 500;
  line-height: 36px;
  align-self: flex-end;
  width: 90%;
  margin: 20px auto;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 25px;
  }

  @media (min-width: 1201px) {
    font-size: 30px;
    line-height: 35px;
  }
`;
const BannerContentContainer = styled.div`
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Bg_Img_Div = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
  @media (max-width: 424px) {
    width: 100%;
    height: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`;

const HeroPage = () => {
  return (
    <Container id="FamilyPage">
      <Bg_Img_Div>
        <img
          src={background}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Bg_Img_Div>
      <BannerContentContainer>
        <Hero id="FamilyPageHero">DY PATIL INTERNATIONAL MUN 2022-2023</Hero>
        <HeroSubtitle id="FamilyPageHeroSubtitle">
          Where Voices are actions
        </HeroSubtitle>
      </BannerContentContainer>
      <MouseScroll />
    </Container>
  );
};

export default HeroPage;
