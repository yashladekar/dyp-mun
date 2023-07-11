import React from "react";
import { PageSeparator } from "../pages/MobileHome";
import { colors } from "../vars/globalVars";
import styled, { css } from "styled-components";
import phoneImg from "../assets/img/waiting-for.png";

const Side = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:first-child {
    height: 50%;
  }

  ${(props) =>
    props.alignToTop &&
    css`
      justify-content: flex-start;
    `};

  @media (min-width: 768px) {
    height: 100%;
    width: 50%;
  }
`;

const Title = styled.h1`
  color: ${colors.yellow};
  font-size: 46px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 10px;

  @media (min-width: 1201px) {
    font-size: 58px;
  }

  @media (max-height: 640px) {
    margin-top: 50px;
  }

  ${(props) =>
    props.tomato &&
    css`
      color: ${colors.tomato};
    `};

  ${(props) =>
    props.brown &&
    css`
      color: ${colors.brown};
    `};
`;

const Subtitle = styled.p`
  color: ${colors.yellow};
  font-size: 14px;
  font-family: Galano;
  text-align: center;
  margin: 0;
  margin-bottom: 30px;

  @media (min-width: 1201px) {
    font-size: 15px;
    margin-bottom: 50px;
  }

  ${(props) =>
    props.tomato &&
    css`
      color: ${colors.tomato};
    `};

  ${(props) =>
    props.brown &&
    css`
      color: ${colors.brown};
    `};
`;

const Button = styled.a`
  display: block;
  color: ${colors.yellow};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  padding: 15px 36px;
  border: 1px solid ${colors.yellow};
  border-radius: 40px;
  transition: all 0.3s linear;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3)};
  }

  ${(props) =>
    props.tomato &&
    css`
      color: ${colors.tomato};
      border-color: ${colors.tomato};
    `};

  ${(props) =>
    props.brown &&
    css`
      color: ${colors.brown};
      border-color: ${colors.brown};
    `};

  ${(props) =>
    props.borderless &&
    css`
      border: 0px;
      padding: 0;
    `};
`;

const Img = styled.img`
  display: block;
  height: auto;

  &#WallpapersImg {
    width: 100%;
  }
`;

const Wallpapers = ({ setHeaderColor }) => (
  <div className="mobile-content" style={{ overflow: "hidden" }}>
    <Side>
      <Title brown id="WallpapersTitle">
        What are you <br /> waiting for ?
      </Title>
      <Subtitle brown id="WallpapersSubtitle">
        Delegate registrations for DYP MUN 2023 are open!
      </Subtitle>
      <Button brown id="WallpapersBuyNow">
        Register
      </Button>
    </Side>
    <Side>
      <Img id="WallpapersImg" src={phoneImg} alt="" />
    </Side>
    <PageSeparator
      position={{ position: "absolute", bottom: 50 }}
      onEnterViewport={() => setHeaderColor(colors.brown)}
    />
  </div>
);

export default Wallpapers;
