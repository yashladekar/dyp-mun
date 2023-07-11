import React from "react";
import styled from "styled-components";
import { colors } from "../vars/globalVars";
const Container = styled.section`
  width: 100%;
  height: 60%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 0;
  position: absolute;
  left: 0;
  top: 50px;
  @media (min-width: 768px) {
    width: 45%;
    height: 100%;
    padding-right: 137px;
    padding-left: 50px;
    margin-left: 5%;
  }
  @media (min-width: 768px) and (min-height: 840px) {
    padding-right: 178px;
  }
  @media (min-width: 1201px) {
    width: 42.5%;
    margin-left: 7.5%;
  }
`;
const Hero = styled.div`
  color: ${colors.skyBlue};
  font-size: 2.4vw;
  font-weight: 500;
  line-height: 2.6vw;
  padding-bottom: 30px;
  border-bottom: 1px solid ${colors.skyBlue};
  margin: 0 20px;
  @media (min-width: 768px) {
    font-size: 34px;
    line-height: 34px;
    margin: 0;
  }
  p {
    margin: 0;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
const MunDetails = () => {
  return (
    <Container id="GameDetails">
      <Hero>
        DYPU bring its first edition of MUN invites you to be a part of it. You are
        being invited to learn and share ideas from a diverse set of experiences
        and backgrounds where the Executive board, International Press and
        International Delegates consolidate to learn about diplomacy,
        international relations, and the United Nations.
      </Hero>
    </Container>
  );
};
export default MunDetails;
