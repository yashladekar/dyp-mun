import React from "react";
import styled from "styled-components";
import { colors } from "../vars/globalVars";
import { PageSeparator } from "../pages/MobileHome";

const Hero = styled.div`
  color: ${colors.skyBlue};
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${colors.skyBlue};
  margin: 0 20px;
  p {
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

const Sidekick = styled.p`
  color: ${colors.skyBlue};
  font-family: "Belwe";
  font-size: 15px;
  font-weight: 500;
  padding-top: 30px;
  margin: 0 20px;
`;

const TheGame = ({ setHeaderColor }) => (
  <div className="mobile-content">
    <Hero>
      DYPU bring its first edition of MUN invites you to be a part of it. You
      are being invited to learn and share ideas from a diverse set of
      experiences and backgrounds where the Executive board, International Press
      and International Delegates consolidate to learn about diplomacy,
      international relations, and the United Nations.
    </Hero>

    <PageSeparator
      position={{ position: "absolute", bottom: 50 }}
      onEnterViewport={() => setHeaderColor(colors.skyBlue)}
    />
  </div>
);

export default TheGame;
