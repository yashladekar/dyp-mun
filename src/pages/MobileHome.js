import React, { Fragment, Component } from "react";
import { TimelineLite } from "gsap";
import handleViewport from "react-in-viewport";
import scrollToComponent from "react-scroll-to-component";
import { GlobalStyleMobile } from "../core/globalStyles";
import { colors } from "../vars/globalVars";
import Header from "../components/Absolute/Header";
import SideMenu from "../components/Absolute/SideMenu";
import Intro from "../mobileComponents/Intro";
import TheGame from "../mobileComponents/IntoText";
import ActionCards from "../mobileComponents/Mun_ActionCard";
import QuestionCards from "../mobileComponents/Dypu_ActionCard";
import InAddition from "../mobileComponents/OurMission";
import QACards from "../mobileComponents/LocationHero";
import WinningCards from "../mobileComponents/DateHero.js";
import Players from "../mobileComponents/EligibilityHero.js";
import Shop from "../mobileComponents/Prizes";
import Wallpapers from "../mobileComponents/RegisterNow";
import GetCloser from "../mobileComponents/StayInTouchWrapper";

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

class MobileHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTween: new TimelineLite({ paused: true }),
      headerColor: colors.skyBlue,
      headerBlendMultiply: true,
    };

    this.Intro = React.createRef();
    this.TheGame = React.createRef();
    this.Cards = React.createRef();
    this.Gallery = React.createRef();
    this.HowToPlay = React.createRef();
    this.Shop = React.createRef();
    this.GetCloser = React.createRef();
  }

  componentDidMount() {
    this.createMenuTween();
    this.setState({
      headerColor: colors.skyBlue,
      headerBlendMultiply: true,
    });
    scrollToComponent(this.Intro.current, { align: "top" });
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

        <section ref={this.Intro} className="mobile-section">
          <Intro />
        </section>

        <section
          ref={this.TheGame}
          className="mobile-section"
          style={{
            backgroundColor: colors.lightBlue,
            height: "auto",
            padding: "80px 0",
          }}
        >
          <TheGame setHeaderColor={this.setHeaderColor} />
        </section>

        <section
          ref={this.Cards}
          className="mobile-section"
          style={{
            backgroundColor: colors.lightBlue,
            height: "550px",
          }}
        >
          <ActionCards setHeaderColor={this.setHeaderColor} />
        </section>

        <section
          className="mobile-section"
          style={{
            backgroundColor: colors.offWhite,
            height: "680px",
          }}
        >
          <QuestionCards setHeaderColor={this.setHeaderColor} />
        </section>

        <section
          ref={this.Gallery}
          className="mobile-section"
          style={{
            backgroundColor: colors.veryPink,
            height: "auto",
            padding: "80px 0",
          }}
        >
          <InAddition setHeaderColor={this.setHeaderColor} />
        </section>

        <section
          className="mobile-section"
          style={{
            backgroundColor: colors.veryPink,
            height: "auto",
            padding: "0 0 80px 0",
            marginTop: "-60px",
          }}
        >
          <QACards setHeaderColor={this.setHeaderColor} />
        </section>

        <section
          className="mobile-section"
          style={{
            backgroundColor: colors.vanilla,
            height: "auto",
            padding: "50px 0 100px 0",
          }}
        >
          <WinningCards setHeaderColor={this.setHeaderColor} />
        </section>

        <section
          className="mobile-section"
          style={{
            backgroundColor: colors.lighterTeal,
            height: "auto",
            padding: "50px 0 100px 0",
          }}
        >
          <Players setHeaderColor={this.setHeaderColor} />
        </section>

        <section
          ref={this.Shop}
          className="mobile-section"
          style={{
            backgroundColor: colors.purple,
            height: "auto",
            padding: "80px 0",
          }}
        >
          <Shop
            navigateTo={this.scrollToPage}
            setHeaderColor={this.setHeaderColor}
            toggleHeaderBlendMultiply={this.toggleHeaderBlendMultiply}
          />
        </section>

        <section
          className="mobile-section"
          style={{
            backgroundColor: colors.vanilla,
            height: "auto",
            padding: "80px 0",
          }}
        >
          <Wallpapers setHeaderColor={this.setHeaderColor} />
        </section>

        <section
          ref={this.GetCloser}
          className="mobile-section"
          style={{
            backgroundColor: colors.vanilla,
            height: "600px",
            paddingBottom: "100px",
          }}
        >
          <GetCloser setHeaderColor={this.setHeaderColor} />
        </section>
      </Fragment>
    );
  }
}

export default MobileHome;
