import React from "react";
import styled, { css } from "styled-components";

import { colors } from "../vars/globalVars";

import hillImg from "../assets/img/campus6.jpg";

const Container = styled.section`
  width: 100%;
  height: 369px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  position: absolute;
  top: 55%;

  @media (min-height: 841px) {
    height: 461px;
  }
`;

const CardList = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  opacity: 0;
  position: absolute;

  img,
  video {
    width: 150px;
    backface-visibility: hidden;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 10px 0px rgba(237, 31, 86, 0.15);

    @media (min-height: 640px) {
      width: 221px;
    }

    @media (min-height: 841px) {
      width: 276px;
    }

    ${(props) =>
      props.blueShadow &&
      css`
        box-shadow: 10px 10px 0px rgba(30, 81, 163, 0.15);
      `};
  }
`;

const CardTitle = styled.h1`
  display: none;
  color: ${(props) => props.color || colors.white};
  font-size: 34px;
  text-align: center;
  margin: 32px 0 0;
  opacity: 0;
`;

const CardDescription = styled.h3`
  display: none;
  color: ${(props) => props.color || colors.white};
  font-family: "Belwe";
  font-size: 15px;
  text-align: center;
  margin: 24px 0 0;
  opacity: 0;
`;

const CommitteDetailCards = () => {
  return (
    <Container id="GameDetailCards">
      <CardList id="GDCards">
        <Card id="GDCard1" blueShadow>
          <img src={hillImg} alt="Climbing" />
          <CardTitle id="GDCard1Title" color={colors.skyBlue}>
            MUN
          </CardTitle>
          <CardDescription id="GDCard1Description" color={colors.skyBlue}>
            With the idea of bringing hundreds of young minds together for the
            pursuit of world peace, we believe that impactful decisions can only
            be made when everybody comes together to speak up , discuss and
            agree to work on their resolutions
          </CardDescription>
        </Card>
        <Card id="GDCard2">
          <CardTitle id="GDCard2Title" color={colors.pink}>
            DYP
          </CardTitle>
          <CardDescription id="GDCard2Description" color={colors.pink}>
            Our mission at DYPIMUN is to introduce students to the MUN program
            that promotes diversity, respect for human dignity and rights,
            concern for the common good we aim to prepare students to be future
            leaders who can shape a world of truth, justice, love, and freedom
          </CardDescription>
        </Card>
      </CardList>
    </Container>
  );
};

export default CommitteDetailCards;
