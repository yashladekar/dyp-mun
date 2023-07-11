import React from "react";
import styled, { css } from "styled-components";

import { colors } from "../vars/globalVars";

import MCInspiring from "../assets/MCInspiring";
import MCEmotional from "../assets/MCEmotional";
import MCFunny from "../assets/MCFunny";
import MCHeartwarming from "../assets/MCHeartwarming";
import MCSurprising from "../assets/MCSurprising";
import MCEncouraging from "../assets/MCEncouraging";
import ourMissionImg from "../assets/img/our-mission.png";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;

  position: absolute;

  @media (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 1201px) {
    width: 85%;
  }

  @media (max-height: 640px) {
    margin-top: 20px;
  }
`;

const CardTypesText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;

  @media (min-width: 768px) {
    height: 100%;
    padding: 0;
  }
`;

const Hero = styled.p`
  color: ${colors.darkTomato};
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${colors.darkTomato};
  margin: 0;

  ${(props) =>
    props.reverse &&
    css`
      align-self: flex-end;
    `};

  @media (max-height: 640px) {
    font-size: 20px;
    line-height: 20px;
    padding-bottom: 10px;
  }

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const Sidekick = styled.p`
  color: ${colors.darkTomato};
  font-family: "Belwe";
  font-size: 15px;
  font-weight: 500;
  padding-top: 12px;
  margin: 0;

  @media (max-height: 640px) {
    padding-top: 10px;
  }
`;

const CardTypesCards = styled.div`
  width: 100%;
  color: ${colors.darkTomato};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 20px;
  margin: 0;

  @media (min-width: 768px) {
    width: 46%;
    padding: 0;
  }
`;

const CardTypesCardsRow = styled.div`
  display: flex;

  &:first-child {
    margin-bottom: 45px;
  }

  @media (min-width: 1201px) {
    &:first-child {
      margin-bottom: 60px;
    }
  }
`;

const CardType = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 130px;

  svg {
    margin-bottom: 10px;
  }

  @media (min-width: 1201px) {
    width: 150px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

`;

const CardTypes = () => {
  return (
    <Container id="CardTypes">
      <div>
        <CardTypesText id="CardTypesText">
          <Hero>Our Mission</Hero>
          <Sidekick>
            Our mission at DYPIMUN is to introduce students to the MUN program
            that promotes diversity, respect for human dignity and rights,
            concern for the common good, in addition to permitting students to
            diplomatically resolve issues at the forefront of international
            relations. Furthermore, we aim to familiarize these students with
            what DYP stands for and prepare them to be future leaders who can
            exercise reason upon knowledge and shape a world of truth, justice,
            love, and freedom.
          </Sidekick>
        </CardTypesText>
        <CardTypesText id="CardTypesText" style={{ marginTop: "30px" }}>
          <Hero reverse>Our Vision</Hero>
          <Sidekick>
            Our vision at DYPIMUN is to ensure that the students of today are
            the effective and efficient leaders of tomorrow, with developed
            interpersonal, public speaking, writing, and research skills.
            Additionally, we envision a future where all participating students
            have high levels of self-esteem and self-confidence, which are
            qualities that can help them widen their circle of friends and in
            their future endeavors, and ultimately shape their path to success.
          </Sidekick>
        </CardTypesText>
      </div>

      <ImgContainer>
        <img src={ourMissionImg} />
      </ImgContainer>
    </Container>
  );
};

export default CardTypes;
