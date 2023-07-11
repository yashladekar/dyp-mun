import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/database";
import isEmail from "sane-email-validation";

import { colors } from "../vars/globalVars";

import RightArrow from "../assets/RightArrow";
import DypMunLogo from "../assets/DypMunLogo";

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  z-index: 7;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  color: ${colors.brown};
  font-size: 46px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 10px;

  @media (min-width: 1201px) {
    font-size: 58px;
  }
`;

const Subtitle = styled.h1`
  color: ${colors.brown};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 10px;

  @media (min-width: 1201px) {
    font-size: 26px;
  }
`;

const Logo = styled.div`
  margin-bottom: 50px;
`;

const EmailContainer = styled.div`
  width: 100%;
  max-width: 450px;
`;

const Email = styled.div`
  width: 100%;
  max-width: 450px;
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-bottom: 1px solid ${colors.brown};

  input {
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
    line-height: 35px;
    padding: 0;
    color: ${colors.brown};

    &::placeholder {
      color: ${colors.brown};
      opacity: 0.6;
    }
  }

  button {
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    color: ${colors.brown};
    font-size: 15px;
    font-weight: 500;
    line-height: 35px;
    border: none;
    padding: 0;

    outline: none;
    cursor: pointer;
  }
`;

const ValidationError = styled.p`
  color: ${colors.darkTomato};
  text-align: left;
  font-size: 12px;
`;


const StayInTouch = (props) => {
  const { isMobile } = props;
  const [email, setEmail] = useState("");
  const [hasSubscribed, setHasSubscribed] = useState("");
  const [validationError, setValidationError] = useState("");

  const updateEmail = (email) => {};

  const saveEmail = () => {};

  return (
    <Container id="StayInTouch" isMobile={isMobile}>
      <Logo id="StayInTouchLogo">
        <DypMunLogo />
      </Logo>
      <Title id="StayInTouchTitle">
        {hasSubscribed ? "Thank you!" : "Get updates!"}
      </Title>
      <Subtitle id="StayInTouchSubtitle">{hasSubscribed ? "" : ""}</Subtitle>
      {!hasSubscribed && (
        <EmailContainer>
          <Email id="StayInTouchEmail" isMobile={isMobile}>
            <input
              type="email"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
              placeholder="Your email address"
            />
            <button onClick={saveEmail} type="button">
              Subscribe <RightArrow color={colors.brown} />
            </button>
          </Email>
          {validationError && (
            <ValidationError>
              Please enter a valid email address
            </ValidationError>
          )}
        </EmailContainer>
      )}
    </Container>
  );
};

export default StayInTouch;
