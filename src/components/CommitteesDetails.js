import React from "react";
import styled from "styled-components";

import CrownIcon1 from "../assets/CrownIcon1";
import CrownIcon2 from "../assets/CrownIcon2";
import CrownIcon3 from "../assets/CrownIcon3";
import { colors } from "../vars/globalVars";

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  display: none;
`;

const Page = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Hero = styled.p`
  padding: 0 25% 0 15%;
  font-family: "Belwe";
  font-weight: 500;
  font-size: 60px;
  letter-spacing: -8px;
  color: ${(props) => props.color || colors.white};
  margin: 0 0 0 -8px;
  padding: 0;

  .dash {
    margin-right: 27px;
    margin-left: 20px;
  }

  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 212px;
    letter-spacing: -2px;
  }
`;

const Sidekick = styled.p`
  padding: 0 25% 0 15%;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.color || colors.white};
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const Icon = styled.div`
  @media (min-width: 768px) {
    margin-bottom: -60px;
  }
`;

const CommitteeCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 1.5rem auto;
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.6%;
  background: #fff;
  line-height: 1.45;
  font-family: Poppins;
  border-radius: 15px;
  overflow: hidden;
  z-index: 0;

  a {
    color: inherit;

    &:hover {
      color: #ffc400;
    }
  }

  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }

  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
  }

  .description {
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;

    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      color: #a2a2a2;
      margin-top: 5px;
    }


    .read-more {
      text-align: right;

      a {
        color: #ffc400;
        font-size: 16px;
        display: inline-block;
        position: relative;
        text-decoration: none;
        background: #fff7de;
        padding: 5px 15px;
        border-radius: 15px;

        &:after {
          content: "\f054";
          font-family: FontAwesome;
          margin-left: -10px;
          opacity: 0;
          vertical-align: middle;
          transition: margin 0.3s, opacity 0.3s;
        }

        &:hover:after {
          margin-left: 5px;
          opacity: 1;
        }
      }
    }
  }

  p {
    position: relative;
    margin: 1rem 0 0;
    color: #555;
    font-size: 13px;

    &:first-of-type {
      margin-top: 1.25rem;

      &:before {
        content: "";
        position: absolute;
        height: 3px;
        background: #ffc400;
        width: 75px;
        top: -1rem;
        border-radius: 3px;
      }
    }
  }

  &:hover .details {
    left: 0%;
  }

  flex-direction: row;
  .meta {
    flex-basis: 40%;
    height: auto;
  }

  .description {
    flex-basis: 60%;

    &:before {
      -webkit-transform: skewX(-3deg);
      transform: skewX(-3deg);
      content: "";
      background: #fff;
      width: 30px;
      position: absolute;
      left: -10px;
      top: 0;
      bottom: 0;
      z-index: -1;
    }
  }

  &.alt {
    flex-direction: row-reverse;

    .description:before {
      left: inherit;
      right: -10px;
      -webkit-transform: skew(3deg);
      transform: skew(3deg);
    }

    .details {
      padding-left: 25px;
    }
  }
  
  p {
    font-size: 16px;
  }
}

`;

const CommitteesDetails = () => {
  return (
    <Container id="Gallery">
      <Page>
        <Hero id="GalleryHero1" color={colors.darkTomato}>
          DY. Patil Techincal Campus, Ambi
        </Hero>
        <Sidekick id="GallerySidekick1" color={colors.darkTomato}>
          <CommitteeCard>
            {" "}
            <div class="meta">
              <div
                class="photo"
                style={{
                  backgroundImage:
                    "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
                }}
              ></div>
            </div>
            <div class="description">
              <h1>Learning to Code</h1>
              <h2>Opening a door to the future</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                mattis mi. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Maecenas sollicitudin semper nisi, vestibulum egestas
                mauris malesuada ac. Quisque ac aliquam mauris, at porttitor
                neque. Sed sit amet laoreet mauris. Aliquam laoreet interdum
                ante vitae rutrum.{" "}
              </p>
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </CommitteeCard>
        </Sidekick>
      </Page>
      <Page>
        <Hero id="GalleryHero2" color={colors.darkTomato}>
          27th - 28th Jan 2023
        </Hero>
        <Sidekick id="GallerySidekick2" color={colors.darkTomato}>
          Date
        </Sidekick>
      </Page>
      <Page>
        <Hero id="GalleryHero3" color={colors.teal}>
          Age group 18-25
        </Hero>
        <Sidekick id="GallerySidekick3" color={colors.teal}>
          ELIGIBILITY
        </Sidekick>
      </Page>
    </Container>
  );
};

export default CommitteesDetails;
