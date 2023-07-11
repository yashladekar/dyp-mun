import React from "react";
import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { colors } from "../vars/globalVars";
import RightArrow from "../assets/RightArrow";
import deckImg from "../assets/img/deck-desktop.png";
import tshirtImg from "../assets/img/tshirt-desktop.png";
import postersImg from "../assets/img/posters-desktop.png";
import phoneImg from "../assets/img/waiting-for.png";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: absolute;

  &#Shop {
    z-index: 4;
  }

  &#Merch {
    z-index: 5;
  }

  &#Wallpapers {
    z-index: 6;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

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

  &:hover {
    background-color: rgba(255, 255, 255, 0.3)};
  }

  @media (min-width: 1201px) {
    padding: 18px 60px;
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

  object-fit: contain;
  max-height: 700px;

  &#DeckImg {
    align-self: flex-end;
    @media (min-width: 768px) {
      align-self: center;
    }
  }

  &#TshirtsImg {
    align-self: flex-end;
  }
`;

export default class Shop extends React.Component {
  render() {
    // const { navigateTo } = this.props;
    return (
      <React.Fragment>
        <Container id="Shop">
          <Side>
            <Title id="ShopTitle">Prizes</Title>
            <Subtitle id="ShopSubtitle">
              You can win existing prizes and goodies
            </Subtitle>
            <Button href="" id="ShopBuyNow">
              Know more
              <RightArrow color={colors.yellow} />
            </Button>
          </Side>
          <Side id="ShopImg">
            <Carousel
              autoPlay
              infiniteLoop
              swipeable
              emulateTouch
              showArrows={false}
              showStatus={false}
              showThumbs={false}
            >
              <Img
                id="DeckImg"
                src="https://gcontent.robertsonmarketing.com/store/20160512512/assets/themes/theme1_en/images/home/aug19/Bike_Collection_March_2022.png"
              />
              <Img
                id="PosterImg"
                src="https://gcontent.robertsonmarketing.com/store/20160512512/assets/themes/theme1_en/images/home/aug19/Drinkware_March_2022.png"
              />
              <Img
                id="TshirtsImg"
                src="https://gcontent.robertsonmarketing.com/store/20160512512/assets/themes/theme1_en/images/home/aug19/YouTube_Collection_March_2022.png"
              />
            </Carousel>
          </Side>
        </Container>

        <Container id="Wallpapers">
          <Side>
            <Title brown id="WallpapersTitle">
              What are you <br /> waiting for ?
            </Title>
            <Subtitle brown id="WallpapersSubtitle">
              Delegate registrations for DYP MUN 2023 are open!
            </Subtitle>
            <Button brown id="WallpapersBuyNow" href="https://unstop.com/o/fNVHTRc?lb=R34jHfX">
              Register
              <RightArrow color={colors.brown} />
            </Button>
          </Side>
          <Side>
            <Img id="WallpapersImg" src={phoneImg} alt="" />
          </Side>
        </Container>
      </React.Fragment>
    );
  }
}
