import React from "react";
import styled from "styled-components";
import DypMunLogo from "../../assets/img/DypMunLogo.png";
import { colors } from "../../vars/globalVars";
import RightArrow from "../../assets/RightArrow";

const Container = styled.header`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.color || colors.white};
  padding: ${(props) => (props.isMobile ? "10px 20px" : "0 20px")};
  border-color: ${(props) => props.color || colors.white};
  margin: ${(props) => (props.isMobile ? "0" : "0px 0 0")};
  mix-blend-mode: ${(props) => props.blend || "normal"};

  position: fixed;
  top: 0;
  z-index: 10;
  margin-top: 10px;

  @media (min-width: 768px) {
    padding: 0;
    width: 90%;
  }

  @media (min-width: 1201px) {
    width: 85%;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItemsUl = styled.ul`
  display: none;
  flex-direction: row;
  list-style: none;
  margin: 0;

  @media (min-width: 768px) {
    display: flex;
    margin-right: 40px;
  }
`;

const MenuItem = styled.li`
  color: inherit;
  font-size: 13px;
  margin: 0 5px;

  opacity: 0.5;
  transition: all 0.5s linear;

  &.active {
    opacity: 1;
  }

  button {
    display: block;
    color: inherit;
    font-weight: 500;
    background-color: transparent;
    padding: 12px;
    border: none;

    outline: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const BuyNow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${(props) => props.color || "inherit"};
  font-weight: 500;
  font-size: 12px;
  padding: 12px 28px;
  border-color: ${(props) => props.color || "inherit"};
  border: 1px solid;
  border-radius: 23px;

  outline: none;
  cursor: pointer;
`;

const Burger = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  margin-bottom: 10px;
  margin-left: 20px;
  color: ${(props) => props.color || "inherit"};
  border-color: ${(props) => props.color || "inherit"};

  @media (min-width: 768px) {
    display: none;
  }
`;

const Slice = styled.div`
  border-bottom: 1px solid;
  border-color: inherit;
  width: 20px;
  height: 12px;
`;

const Header = ({ navigateTo, openMenu, color, blend, isMobile }) => (
  <Container
    id="Header"
    isMobile={isMobile || undefined}
    color={color || undefined}
    blend={blend || undefined}
  >
    <LogoContainer onClick={() => navigateTo("Intro")}>
      <img src={DypMunLogo} style={{ width: "100px" }} />
    </LogoContainer>
    <MenuContainer>
      <MenuItemsUl id="HeaderMenu">
        <MenuItem className="Menu-Item About active">
          <button onClick={() => navigateTo("About")}>About</button>
        </MenuItem>

        <MenuItem className="Menu-Item Cards">
          <button onClick={() => navigateTo("Cards")}>Committees</button>
        </MenuItem>
        <MenuItem className="Menu-Item CardTypes">
          <button onClick={() => navigateTo("CardTypes")}>Mission</button>
        </MenuItem>

        <MenuItem className="Menu-Item Gallery">
          <button onClick={() => navigateTo("Gallery")}>Info</button>
        </MenuItem>

        <MenuItem className="Menu-Item Shop">
          <button onClick={() => navigateTo("Shop")}>Prizes</button>
        </MenuItem>
        <MenuItem className="Menu-Item Download">
          <button onClick={() => navigateTo("Download")}>Download</button>
        </MenuItem>
      </MenuItemsUl>
      <BuyNow
        color={color || undefined}
        id="HeaderBuyButton"
        onClick={() =>
          (window.location = "https://unstop.com/o/fNVHTRc?lb=R34jHfX")
        }
      >
        Register <RightArrow color={color || colors.white} />
      </BuyNow>
      <Burger color={color || undefined} onClick={openMenu}>
        <Slice />
        <Slice />
      </Burger>
    </MenuContainer>
  </Container>
);

export default Header;
