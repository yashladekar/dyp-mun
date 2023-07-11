import React from "react";
import styled from "styled-components";

import { colors } from "../../vars/globalVars";

const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || colors.white};
  font-size: 12px;
  padding: 0 20px;
  margin: 0 0 50px;

  @media (min-width: 768px) {
    padding: 0;
    margin: 0 0 30px;
    width: 90%;
    position: absolute;
    bottom: 0;
    z-index: 10;
  }
  @media (min-width: 1201px) {
    width: 85%;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: auto;
  }
  div {
    @media (min-width: 768px) {
      margin-right: 60px;
    }
    p {
      margin: 0;
      &:first-child {
        margin-bottom: 5px;
      }
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Footer = ({ color }) => (
  <Container color={color || undefined} id="Footer">
    <LinksContainer>
      <div>
        <p>
          <a href="mailto:info.dypimun@gmail.com">info.dypimun@gmail.com</a>
        </p>
        <p>
          Made with ♥ by{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            dypmun IT team
          </a>{" "}
        </p>
      </div>
      <div>
        <p>
          <a target="_blank" href="https://www.facebook.com/DYPIMUN" rel="noopener noreferrer">
            Facebook
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.instagram.com/dypimun23/" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </LinksContainer>
  </Container>
);

export default Footer;
