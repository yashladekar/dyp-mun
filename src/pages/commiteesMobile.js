import React, { Fragment, Component } from "react";
import { TimelineLite } from "gsap";
import handleViewport from "react-in-viewport";
import scrollToComponent from "react-scroll-to-component";
import { GlobalStyleMobile } from "../core/globalStyles";
import { colors } from "../vars/globalVars";
import Header from "../components/Absolute/Header";
import SideMenu from "../components/Absolute/SideMenu";
import CommiteesCardss from "../mobileComponents/commitiesCard";


const Separator = ({ innerRef, position }) => (
  <div
    ref={innerRef}
    style={{
      width: "100%",
      height: "1px",
      backgroundColor: "transparent",
      position: "absolute",
      bottom: 0,
      ...position,
    }}
  />
);

export const PageSeparator = handleViewport(Separator);

class CommiteesMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTween: new TimelineLite({ paused: true }),
      headerColor: colors.skyBlue,
      headerBlendMultiply: true,
    };

    this.CommiteesCardss = React.createRef();
  }

  componentDidMount() {
    this.createMenuTween();
    this.setState({
      headerColor: colors.skyBlue,
      headerBlendMultiply: true,
    });
    scrollToComponent(this.CommiteesCardss.current, { align: "top" });
  }

  createMenuTween = () => {
    const { menuTween } = this.state;

    menuTween.to("#SideMenu", 0.4, {
      right: "0%",
    });
  };

  openMenu = () => {
    const { menuTween } = this.state;
    menuTween.play();
  };

  closeMenu = () => {
    const { menuTween } = this.state;
    menuTween.reverse();
  };

  setHeaderColor = (color) => {
    this.setState({ headerColor: color });
  };

  toggleHeaderBlendMultiply = (toggle) => {
    this.setState({ headerBlendMultiply: toggle });
  };

  scrollToPage = (id) => {
    scrollToComponent(this[id].current, { align: "top" });
  };

  render() {
    const { headerColor, headerBlendMultiply } = this.state;
    return (
      <Fragment>
        <GlobalStyleMobile />

        <Header
          isMobile
          blend={headerBlendMultiply ? "multiply" : "normal"}
          navigateTo={this.scrollToPage}
          openMenu={this.openMenu}
          color={headerColor}
        />

        <SideMenu navigateTo={this.scrollToPage} closeMenu={this.closeMenu} />

        <section
          style={{
            backgroundColor: colors.offWhite,
          }}
        >
          <CommiteesCardss setHeaderColor={this.setHeaderColor} />
        </section>
      </Fragment>
    );
  }
}

export default CommiteesMobile;
