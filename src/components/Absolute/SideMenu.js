import React, { PureComponent } from "react";
import styled from "styled-components";
import { colors } from "../../vars/globalVars";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  background: ${colors.white};
  z-index: 19;

  position: fixed;
  top: 0;
  right: -100%;
`;

const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;

  position: absolute;
  top: 0;
  margin: 60px 0 0;
  right: 14%;
`;

const MenuItemsContainer = styled.ul`
  list-style: none;
  padding-left: 30%;
`;

const MenuItem = styled.li`
  font-size: 28px;
  line-height: 28px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${colors.darkGreen};
  margin: 28px 0;

  button {
    display: block;
    color: inherit;
    background-color: transparent;
    padding: 0;
    border: none;

    outline: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const CloseIcon = () => (
  <svg width={16} height={15}>
    <g
      stroke={colors.darkGreen}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    >
      <path d="M.929.762L15.07 14.904M.575 15.05L14.718.91" />
    </g>
  </svg>
);

const SideMenu = (props) => {
  const closeMenuAndScrollTo = (id) => {
    const { navigateTo, closeMenu } = this.props;
    navigateTo(id);
    closeMenu();
  };
  const { closeMenu } = props;

  return (
    <Container id="SideMenu">
      <CloseButton onClick={closeMenu}>
        <CloseIcon />
      </CloseButton>

      <MenuItemsContainer>
        <MenuItem className="Menu-Item About">
          <button onClick={() => closeMenuAndScrollTo("About")}>About</button>
        </MenuItem>
        <MenuItem className="Menu-Item Download">
          <button onClick={() => closeMenuAndScrollTo("Download")}>
            Download
          </button>
        </MenuItem>
        <MenuItem className="Menu-Item Gallery">
          <button onClick={() => closeMenuAndScrollTo("Gallery")}>
            Prizes
          </button>
        </MenuItem>
        <MenuItem className="Menu-Item Prizes">
          <button onClick={() => closeMenuAndScrollTo("Prizes")}>
            How to Prepare
          </button>
        </MenuItem>
        <MenuItem className="Menu-Item ">
          <button onClick={() => closeMenuAndScrollTo("")}>Teams</button>
        </MenuItem>
        <MenuItem className="Menu-Item Info">
          <button onClick={() => closeMenuAndScrollTo("Info")}>
            Info
          </button>
        </MenuItem>
      </MenuItemsContainer>
    </Container>
  );
};

export default SideMenu;
