import React, { useEffect } from "react";
import { TimelineMax, TweenMax, Power2 } from "gsap";
import styled, { css } from "styled-components";

import { colors } from "../vars/globalVars";

import hillImg from "../assets/img/campus6.jpg";
import dude1Img from "../assets/img/ACDude1.png";
import dude2Img from "../assets/img/ACDude2.png";
import dude3Img from "../assets/img/ACDude3.png";
import dude4Img from "../assets/img/ACDude4.png";

import munLogo from "../assets/img/munLogo.png";

import disecLogo from "../assets/img/committees/disec.png";
import ecofinLogo from "../assets/img/committees/ecofin.png";
import ecosocLogo from "../assets/img/committees/ecosoc.png";
import g20Logo from "../assets/img/committees/g20.png";
import sochumLogo from "../assets/img/committees/sochum.png";
import specpolLogo from "../assets/img/committees/disec.png";
import unctadLogo from "../assets/img/committees/unctad.png";
import unescoLogo from "../assets/img/committees/unesco.png";
import ungaLogo from "../assets/img/committees/unga.png";
import unscLogo from "../assets/img/committees/unsc.png";

import DypMunLogo from "../assets/DypMunLogo";
import HoverCursor from "../assets/img/HoverCursor.png";

const Container = styled.section`
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;

  @media (min-width: 768px) {
    width: 90%;
    top: 0;
  }

  @media (min-width: 1201px) {
    width: 85%;
  }
`;

const CardList = styled.div`
  height: 100%;
  min-width: 100%;
  display: none;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  opacity: 0;

  &#CardsGallery .Card {
    display: none;
    height: 369px;
    position: relative;
    opacity: 0;

    @media (min-height: 841px) {
      height: 461px;
    }

    img,
    video {
      position: absolute;
      top: 0;
    }

    .CardBack {
      background-color: ${colors.white};
      backface-visibility: hidden;
      border-radius: 5px;
      box-shadow: 10px 10px 0px rgba(237, 31, 86, 0.15);
      position: absolute;
      top: 0;

      ${(props) =>
        props.blueShadow &&
        css`
          box-shadow: 10px 10px 0px rgba(30, 81, 163, 0.15);
        `};
    }
  }

  &#FamilyCards {
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: nowrap;
    }

    > div {
      display: flex;
      /*flex: 1;*/
      align-items: flex-start;
      justify-content: center;

      
      
      @media (max-width: 768px) {
        width:100%;
      }
    }

    .Card {
      margin: 20px;
      max-width: 25%;

      @media (min-height: 640px) {
        max-width: 30%;
      }

      @media (min-height: 800px) {
        max-width: 40%;
      }

      @media (min-width: 768px) {
        margin: 0;
        max-width: none;

        &:not(.first) {
          margin-left: 40px;
        }
      }
    }
  }
`;

const Card = styled.div`
  width: 221px;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  ${(props) =>
    props.backgroundColor
      ? css`
          background-color: ${colors[`${props.backgroundColor}`]};
        `
      : css`
          background-color: ${colors.white};
        `};

  @media (min-height: 841px) {
    width: 276px;
  }

  &:hover {
    &.i > 0 && cursorOn {
      cursor: url(${HoverCursor}), auto;
    }
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 100%;
    maxWidth: 100px;
    backface-visibility: hidden;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 10px 0px rgba(237, 31, 86, 0.15);

    ${(props) =>
      props.blueShadow &&
      css`
        box-shadow: 10px 10px 0px rgba(30, 81, 163, 0.15);
      `};
  }
`;

const CardTitle = styled.h1`
  position: absolute;
  margin: 0;
  top: -17%;
  left: -25%;
  text-align: center;
  width: 150%;
  color: ${(props) => props.color || colors.white};
  font-size: 34px;

  @media (min-height: 841px) {
    width: 100%;
    top: -16%;
    left: auto;
  }
`;
const Title = styled.h1`
  position: absolute;
  margin: 0;
  top: -13%;
  left: -25%;
  text-align: center;
  width: 130%;
  color: ${(props) => props.color || colors.black};
  font-size: 28px;

  @media (min-height: 841px) {
    width: 100%;
    top: -16%;
    left: auto;
  }
`;

const CardDescription = styled.h3`
  position: absolute;
  text-align: center;
  margin: 0;
  bottom: -25%;
  left: -55%; // because of width 150%
  width: 230%;
  font-family: "Belwe";
  font-size: 15px;
  color: ${(props) => props.color || colors.white};

  @media (min-height: 841px) {
    bottom: -17%;
  }
`;

const CardBack = styled.div`
  width: 100%;
  height: 369px;

  @media (min-height: 841px) {
    height: 461px;
  }
`;

const CardBackContent = styled.div`
  padding: 30.8px 23.1px 23.1px;

  @media (min-height: 841px) {
    padding: 44px 33px 33px;
  }
`;
const CardBackTitle = styled.div`
  display: inline-block;
  font-family: "Belwe";
  font-weight: 500;
  font-size: 13px;
  color: ${colors.darkGrey};
  padding: 0 6px 6px 0;
  border-bottom: 1px solid ${colors.darkGrey};
  margin-bottom: 15.4px;

  @media (min-height: 841px) {
    margin-bottom: 22px;
  }
`;

const CardBackQuestion = styled.div`
  color: ${colors.darkGrey};
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;

  @media (min-height: 841px) {
    font-size: 2px;
    line-height: 30px;
  }
`;

const CardBackLogo = styled.div`
  position: absolute;
  bottom: 22.4px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);

  @media (min-height: 841px) {
    bottom: 32px;
  }
`;

const BottomProgressContainer = styled.div`
  width: 30%;
  height: 1px;
  background-color: rgba(237, 31, 86, 0.5); // colors.pink
  transform: translateX(-50%);
  position: absolute;
  bottom: 15%;
  left: 50%;
`;

const ProgressBar = styled.div`
  width: 10%;
  height: 100%;
  background-color: ${colors.pink};

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const committes = [
  {
    poster: munLogo,
    extra: {
      typeText: "MUN",
      color: colors.skyBlue,
      descriptionText:
        "With the idea of bringing hundreds of young minds together for the pursuit of world peace,  we believe that impactful decisions can only be made when everybody comes together to speak up , discuss and agree to work on their resolutions",
    },
    backTitleText: "MUN",
    backCommitteText:
      "At a Model UN conference, students work as the representatives of a country, an organization, or a person and aim to solve problems working with other delegates from around the world. MUN teaches skills like research, public speaking, debating and writing skills,",
  },
  {
    poster: hillImg,
    extra: {
      typeText: "DYP",
      color: colors.pink,
      descriptionText:
        "Our mission at DYPIMUN is to introduce students to the MUN program that promotes diversity, respect for human dignity and rights, concern for the common good we aim to prepare students to be future leaders who can shape a world of truth, justice, love, and freedom",
    },
    backTitleText: "DYP",
    backCommitteText:
      "DYP aims the students of today are the effective and efficient leaders of tomorrow, with developed interpersonal, public speaking, writing, and research skills. Additionally, we envision a future where all participating students have high levels of self-esteem and self-confidence",
  },

  {
    poster: disecLogo,
    backTitleText:
      "Disarmament and International Security Committee (UNGA 1st Committee)",
    backCommitteText:
      "The First Committee deals with disarmament, global challenges and threats to peace that affect the international community and seeks out solutions to the challenges in the international security regime.",
  },
  {
    poster: ecofinLogo,
    backTitleText: "Economic and Financial Committee (UNGA 2nd Committee)",
    backCommitteText:
      "The second committee deals with issues relating to economic growth and development such as macroeconomic policy questions; financing for development; sustainable development; globalization and interdependence;",
  },
  {
    poster: sochumLogo,
    backTitleText:
      "Social, Cultural, and Humanitarian Committee (UNGA 3rd Committee)",
    backCommitteText:
      "The General Assembly allocates to the Third Committee part of the work to focus on the examination of human rights questions, including reports of the special procedures of the Human Rights Council which was established in 2006.",
  },
  {
    poster: specpolLogo,
    backTitleText:
      "SPECPOL – Special Political and Decolonization (UNGA 4th Committee)",
    backCommitteText:
      "considers a broad range of issues covering a cluster of five decolonization-related agenda items, the effects of atomic radiation, questions relating to information, a comprehensive review of the question of peacekeeping operations as well as a review of special political missions.",
  },
  {
    poster: ecosocLogo,
    backTitleText: "Economic and Social Council",
    backCommitteText:
      "Sustainable development is the international community’s most urgent priority, and the core aim of the 2030 Development Agenda for sustainable development. ",
  },
  {
    poster: ungaLogo,
    backTitleText: "General Assembly (UNGA)",
    backCommitteText:
      "The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations.",
  },
  {
    poster: unscLogo,
    backTitleText: "SC / UNSC – Security Council",
    backCommitteText:
      "The Security Council has primary responsibility for the maintenance of international peace and security. It has 15 Members, and each Member has one vote. Under the Charter of the United Nations, all Member States are obligated to comply with Council decisions.",
  },
  {
    poster: unescoLogo,
    backTitleText:
      "UNESCO – UN Educational, Scientific, and Cultural Organization",
    backCommitteText:
      "UNESCO uses education, science, culture, communication and information to foster mutual understanding and respect for our planet. We work to strengthen the intellectual and moral solidarity of humankind.",
  },
  {
    poster: unctadLogo,
    backTitleText:
      "UNCTAD – United Nations Conference on Trade and Development",
    backCommitteText:
      "UNCTAD support developing countries to access the benefits of a globalized economy more fairly and effectively. UNCTAD also helps equip them to deal with the potential drawbacks of greater economic integration.",
  },
  {
    poster: g20Logo,
    backTitleText: "G20 – Group of Twenty",
    backCommitteText:
      "The G20 is a strategic multilateral platform connecting the world’s major developed and emerging economies. The G20 holds a strategic role in securing future global economic growth and prosperity. ",
  },
];

const timelines = [
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
  new TimelineMax({ paused: true }),
];

const Cards = () => {
  useEffect(() => {
    TweenMax.set(document.querySelectorAll(".CardBack"), { rotationY: -180 });

    timelines.forEach((tl, i) => {
      tl.to(`#Card${i + 1} img, #Card${i + 1} video`, 0.7, {
        rotationY: 180,
        ease: Power2.easeOut,
      }).to(
        `#Card${i + 1} .CardBack`,
        0.7,
        {
          rotationY: 0,
          force3D: false,
          ease: Power2.easeOut,
        },
        "-=0.7"
      );
    });
  }, []);

  const play = (tl) => {
    tl.play();
  };

  const reverse = (tl) => {
    tl.reverse();
  };

  return (
    <Container id="Cards">
      <CardList id="CardsGallery">
        {committes.map((card, i) => {
          const actualI = i + 1;
          return (
            <Card
              id={`Card${actualI}`}
              key={`Card${actualI}`}
              blueShadow={i < 1}
              className={`Card`}
              onMouseEnter={(e) => {
                if (e.currentTarget.classList.contains("cursorOn")) {
                  return play(timelines[i]);
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.classList.contains("cursorOn")) {
                  return reverse(timelines[i]);
                }
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                if (e.currentTarget.classList.contains("cursorOn")) {
                  return play(timelines[i]);
                }
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                if (e.currentTarget.classList.contains("cursorOn")) {
                  return reverse(timelines[i]);
                }
              }}
            >
              {actualI == 3 && (
                <Title id={`Card${actualI}Title`}>Committees</Title>
              )}
              {card.extra && (
                <CardTitle id={`Card${actualI}Title`} color={card.extra.color}>
                  {card.extra.typeText}
                </CardTitle>
              )}
              {card.poster && (
                <img src={card.poster} alt={card.backQuestionText} />
              )}
              
              <CardBack className="CardBack">
                <CardBackContent>
                  <CardBackTitle>{card.backTitleText}</CardBackTitle>
                  <CardBackQuestion>{card.backCommitteText}</CardBackQuestion>
                  <CardBackLogo>
                    <DypMunLogo xsmall />
                  </CardBackLogo>
                </CardBackContent>
              </CardBack>
              {card.extra &&
                  <CardDescription id={`Card${actualI}Description`} color={card.extra.color}>
                    {card.extra.descriptionText}
                  </CardDescription>
                }
              
            </Card>
          );
        })}
      </CardList>
      <CardList id="FamilyCards">
        <div>
          <Card id="Card11" className="Card first" backgroundColor="pink">
            <img src={dude1Img} alt="" />
          </Card>
          <Card id="Card12" className="Card" backgroundColor="pink">
            <img src={dude2Img} alt="" />
          </Card>
        
          <Card id="Card13" className="Card" backgroundColor="pink">
            <img src={dude3Img} alt="" />
          </Card>
          <Card id="Card14" className="Card" backgroundColor="pink">
            <img src={dude4Img} alt="" />
          </Card>
        </div>
      </CardList>
      <BottomProgressContainer id="ProgressBar">
        <ProgressBar />
      </BottomProgressContainer>
    </Container>
  );
};

export default Cards;
