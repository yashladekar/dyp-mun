import React from "react";
import { colors } from "../vars/globalVars";
import styled, { css } from "styled-components";
import hillImg from "../assets/img/campus6.jpg";
import { PageSeparator } from "../pages/commiteesMobile";
const Card = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  img {
    width: 220px;
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
const CommiteesCardss = ({ setHeaderColor }) => (
  <div className="mobile-content">
    <Card id="GDCard2">
      <img src={hillImg} alt="Question Card" />
      <CardTitle id="GDCard2Title" color={colors.pink}>
        DYP
      </CardTitle>
      <CardDescription id="GDCard2Description" color={colors.pink}>
        Our mission at DYPIMUN is to introduce students to the MUN program that
        promotes diversity, respect for human dignity and rights, concern for
        the common good we aim to prepare students to be future leaders who can
        shape a world of truth, justice, love, and freedom
      </CardDescription>
    </Card>
    <Card id="GDCard2">
      <img src={hillImg} alt="Question Card" />
      <CardTitle id="GDCard2Title" color={colors.pink}>
        DYP
      </CardTitle>
      <CardDescription id="GDCard2Description" color={colors.pink}>
        Our mission at DYPIMUN is to introduce students to the MUN program that
        promotes diversity, respect for human dignity and rights, concern for
        the common good we aim to prepare students to be future leaders who can
        shape a world of truth, justice, love, and freedom
      </CardDescription>
    </Card>
    <Card id="GDCard2">
      <img src={hillImg} alt="Question Card" />
      <CardTitle id="GDCard2Title" color={colors.pink}>
        DYP
      </CardTitle>
      <CardDescription id="GDCard2Description" color={colors.pink}>
        Our mission at DYPIMUN is to introduce students to the MUN program that
        promotes diversity, respect for human dignity and rights, concern for
        the common good we aim to prepare students to be future leaders who can
        shape a world of truth, justice, love, and freedom
      </CardDescription>
    </Card>
    <Card id="GDCard2">
      <img src={hillImg} alt="Question Card" />
      <CardTitle id="GDCard2Title" color={colors.pink}>
        DYP
      </CardTitle>
      <CardDescription id="GDCard2Description" color={colors.pink}>
        Our mission at DYPIMUN is to introduce students to the MUN program that
        promotes diversity, respect for human dignity and rights, concern for
        the common good we aim to prepare students to be future leaders who can
        shape a world of truth, justice, love, and freedom
      </CardDescription>
    </Card>
    <Card id="GDCard2">
      <img src={hillImg} alt="Question Card" />
      <CardTitle id="GDCard2Title" color={colors.pink}>
        DYP
      </CardTitle>
      <CardDescription id="GDCard2Description" color={colors.pink}>
        Our mission at DYPIMUN is to introduce students to the MUN program that
        promotes diversity, respect for human dignity and rights, concern for
        the common good we aim to prepare students to be future leaders who can
        shape a world of truth, justice, love, and freedom
      </CardDescription>
    </Card>
    <PageSeparator
      position={{ position: "absolute", bottom: 50 }}
      onEnterViewport={() => setHeaderColor(colors.pink)}
    />
  </div>
);
export default CommiteesCardss;
