import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { PageSeparator } from "../pages/MobileHome";
import { colors } from "../vars/globalVars";
import RightArrow from "../assets/RightArrow";
// import deckImg from "../assets/img/Deck.png";
import postersImg from "../assets/img/posters-desktop.png";
import tshirtImg from "../assets/img/tshirt-mobile.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = styled.h1`
  color: ${colors.yellow};
  text-align: center;
  margin: 0 0 10px;
  font-size: 45px;
  font-weight: 500;
`;

const Subtitle = styled.p`
  color: ${colors.yellow};
  font-size: 14px;
  font-family: Galano;
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
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
  align-self: center;
  width: 230px;
  margin-bottom: 80px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3)};
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;

const Shop = ({ setHeaderColor, toggleHeaderBlendMultiply, navigateTo }) => (
  <div className="mobile-content" style={{ paddingBottom: "50px" }}>
    <Hero>Prizes</Hero>

    <Subtitle>You can win existing prizes and goodies</Subtitle>

    <Button onClick={() => navigateTo("GetCloser")}>
      Know more
      <RightArrow color={colors.yellow} />
    </Button>

    <Carousel
      autoPlay
      infiniteLoop
      interval={4000}
      swipeable
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={900}
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

    <PageSeparator
      position={{ position: "absolute", bottom: 100 }}
      onEnterViewport={() => {
        setHeaderColor(colors.yellow);
        toggleHeaderBlendMultiply(false);
      }}
      onLeaveViewport={() => toggleHeaderBlendMultiply(true)}
    />
  </div>
);

export default Shop;
