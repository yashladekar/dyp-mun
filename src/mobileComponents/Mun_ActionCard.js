import React from "react";
import { PageSeparator } from "../pages/MobileHome";
import { colors } from "../vars/globalVars";
import styled, { css } from "styled-components";
import munLogo from "../assets/img/munLogo.png";

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-top: -60px;

  img {
    width: 220px;
    backface-visibility: hidden;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 10px 0px rgba(237, 31, 86, 0.15);
    background-color: ${colors.white};

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
  color: ${(props) => props.color || colors.white};
  font-size: 34px;
  text-align: center;
  margin: 32px 0 0;
`;

const CardDescription = styled.h3`
  color: ${(props) => props.color || colors.white};
  font-family: "Belwe";
  font-size: 15px;
  text-align: center;
  margin: 24px 0 0;
`;

const ActionCards = ({ setHeaderColor }) => (
  <div className="mobile-content" style={{ justifyContent: "flex-start " }}>
    <Card id="GDCard1" blueShadow>
      <img src={munLogo} alt="Climbing" />
      <CardTitle id="GDCard1Title" color={colors.skyBlue}>
        MUN
      </CardTitle>
      <CardDescription id="GDCard1Description" color={colors.skyBlue}>
        With the idea of bringing hundreds of young minds together for the
        pursuit of world peace, we believe that impactful decisions can only be
        made when everybody comes together to speak up , discuss and agree to
        work on their resolutions{" "}
      </CardDescription>
    </Card>
    <PageSeparator
      position={{ position: "absolute", bottom: 50 }}
      onEnterViewport={() => setHeaderColor(colors.skyBlue)}
    />
  </div>
);

export default ActionCards;
