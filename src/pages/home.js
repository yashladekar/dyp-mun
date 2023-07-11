import React, { useEffect, useState } from "react";
import { TimelineMax, TweenMax, Power3 } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import styled from "styled-components";
import t1_intro from "../tweens/t1_intro";
import t2_cardsShowcase from "../tweens/t2_cardsShowcase";
import t3_cardTricks from "../tweens/t3_cardTricks";
import t4_cardTypes from "../tweens/t4_cardTypes";
import { GlobalStyle } from "../core/globalStyles";
import Header from "../components/Absolute/Header";
import Footer from "../components/Absolute/Footer";
import SideMenu from "../components/Absolute/SideMenu";
import Background1 from "../components/Absolute/Background1";
import Background2 from "../components/Absolute/Background2";
import Background3 from "../components/Absolute/Background3";
import LandingPage from "../components/LandingPage";
import MunDetails from "../components/MunDetails";
import CommitteDetailCards from "../components/CommitteDetailCards";
import Cards from "../components/Cards";
import CardTypes from "../components/CardTypes";
import "../App.css";
import HeroPage from "../components/HeroPage";
import Shop from "../components/Prices";
import StayInTouch from "../components/StayInTouch";
import t8_shop from "../tweens/t8_shop";
import Gallery from "../components/Gallery";
import t5_gallery from "../tweens/t5_gallery";
const plugins = [TextPlugin];
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Home = () => {
  const [menuTween, setMenuTween] = useState(new TimelineMax({ paused: true }));
  const [masterTween, setMasterTween] = useState(
    new TimelineMax({ paused: false })
  );
  let scene;
  const createMenuTween = () => {
    menuTween.to("#SideMenu", 0.5, {
      right: "0%",
    });
  };
  const registerEventListeners = () => {
    window.addEventListener("resize", () => scene.destroy(true));
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        masterTween.play();
      } else {
        masterTween.time() > 3.2 && masterTween.reverse();
      }
    });
    let firstTouchX = undefined;
    let firstTouchY = undefined;
    window.addEventListener("touchmove", (e) => {
      e.preventDefault();
      var nextTouchX = e.touches[0].clientX;
      var nextTouchY = e.touches[0].clientY;
      var XDistance = Math.abs(firstTouchX - nextTouchX);
      var YDistance = Math.abs(firstTouchY - nextTouchY);
      if (XDistance > YDistance && XDistance > 150) {
        if (nextTouchX > firstTouchX) {
          masterTween.reverse();
        } else {
          masterTween.play();
        }
      } else if (YDistance > 150) {
        if (nextTouchY > firstTouchY) {
          masterTween.reverse();
        } else {
          masterTween.play();
        }
      }
    });
    window.addEventListener("touchstart", (e) => {
      firstTouchX = e.touches[0].clientX;
      firstTouchY = e.touches[0].clientY;
    });
  };
  const bootTweens = () => {
    var controller = new window.ScrollMagic.Controller();
    scene = new window.ScrollMagic.Scene({
      triggerElement: "#ContainerPinElement",
      triggerHook: "onLeave",
      duration: "0%",
    })
      .setPin("#ContainerPinElement")
      .addTo(controller);
    registerEventListeners();
    let changedMasterTween = masterTween;
    changedMasterTween = t1_intro(changedMasterTween);
    changedMasterTween = t2_cardsShowcase(changedMasterTween);
    changedMasterTween = t3_cardTricks(changedMasterTween);
    changedMasterTween = t4_cardTypes(changedMasterTween);
    changedMasterTween = t5_gallery(changedMasterTween);
    changedMasterTween = t8_shop(masterTween);
    setMasterTween(changedMasterTween);
  };
  const openMenu = () => {
    menuTween.play();
  };
  const closeMenu = () => {
    menuTween.reverse();
  };
  const playTimelineAtLabel = (label) => {
    masterTween.pause();
    masterTween.seek(label);
  };
  useEffect(() => {
    TweenMax.defaultEase = Power3.easeOut;
    createMenuTween();
    bootTweens();
  });
  return (
    <Container id="ContainerPinElement">
      <GlobalStyle />
      <Background1 />
      <Background2 />
      <Background3 />
      <LandingPage />
      <HeroPage />
      <MunDetails />
      <CommitteDetailCards />
      <Cards masterTween={masterTween} id="Cards" />
      <CardTypes />
      <Gallery />
      <Shop navigateTo={playTimelineAtLabel} />
      <StayInTouch />
      <Header navigateTo={playTimelineAtLabel} openMenu={openMenu} />
      <Footer />
      <SideMenu navigateTo={playTimelineAtLabel} closeMenu={closeMenu} />
    </Container>
  );
};
export default Home;
