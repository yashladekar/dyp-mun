import { Linear } from "gsap";
import { colors } from "../vars/globalVars";
const isSmallRes = window.innerWidth < 768;
export default (tl) => {
  tl
    .set("#HowToPlay", { display: "flex" })
    .to("#HeaderMenu .Menu-Item", 0, { className: "-=active" }, "-=0.7")
    .to("#HeaderMenu .HowToPlay", 0, { className: "+=active" })
    .from("#HowToPlayHero", 1, { y: 40, display: "none", opacity: 0 }, "-=0.5");
  if (isSmallRes) {
    tl.from("#HowToPlayMobileProgress", 1, { x: 70, opacity: 0 }, "-=0.8");
  } else {
    tl.from("#HowToPlayDesktopSidebar", 1, { x: 70, opacity: 0 }, "-=0.8");
  }
  tl
    .addLabel("HowToPlay")
    .addPause()
    .to("#HowToPlayHero", 1, { y: -40, display: "none", opacity: 0 })
    .to("#HowToPlay .CurrentStep", 0, { text: "1" });
  if (isSmallRes) {
    tl.from("#CurrentStepContainer", 0.5, { display: "none", opacity: 0 }).to(
      "#HowToPlay .HowToPlayText1",
      0.5,
      { display: "block", opacity: 1 },
      "-=0.5"
    );
  } else {
    tl.to("#SideProgressBarFull", 0.5, {
      height: "20%",
      ease: Linear.easeNone,
    }).to(
      "#HowToPlayDesktopSidebar .HowToPlayText1",
      0.5,
      { color: colors.darkTeal },
      "-=0.5"
    );
  }
  tl.addLabel("HowToPlayStep1");
  tl.from(
    "#HowToPlayImg1",
    0.5,
    { display: "none", y: 40, opacity: 0 },
    "-=0.5"
  )
    .addPause()
    .to("#HowToPlayImg1", 0.5, { display: "none", y: -40, opacity: 0 })
    .to("#HowToPlay .CurrentStep", 0, { text: "2" });
  if (isSmallRes) {
    tl.to("#HowToPlay .HowToPlayText1", 0.5, {
      display: "none",
      opacity: 0,
    }).to("#HowToPlay .HowToPlayText2", 0.5, { display: "block", opacity: 1 });
  } else {
    tl.to("#SideProgressBarFull", 0.5, { height: "40%", ease: Linear.easeNone })
      .to("#SideLegend > div", 0, { clearProps: "color" }, "-=0.5")
      .to(
        "#HowToPlayDesktopSidebar .HowToPlayText2",
        0.5,
        { color: colors.darkTeal },
        "-=0.5"
      );
  }
  tl.addLabel("HowToPlayStep2");
  tl.from(
    "#HowToPlayImg2",
    0.5,
    { display: "none", y: 40, opacity: 0 },
    "-=0.5"
  )
    .addPause()
    .to("#HowToPlayImg2", 0.5, { display: "none", y: -40, opacity: 0 })
    .to("#HowToPlay .CurrentStep", 0, { text: "3" });
  if (isSmallRes) {
    tl.to("#HowToPlay .HowToPlayText2", 0.5, {
      display: "none",
      opacity: 0,
    }).to("#HowToPlay .HowToPlayText3", 0.5, { display: "block", opacity: 1 });
  } else {
    tl.to("#SideProgressBarFull", 0.5, { height: "60%", ease: Linear.easeNone })
      .to("#SideLegend > div", 0, { clearProps: "color" }, "-=0.5")
      .to(
        "#HowToPlayDesktopSidebar .HowToPlayText3",
        0.5,
        { color: colors.darkTeal },
        "-=0.5"
      );
  }
  tl.addLabel("HowToPlayStep3");
  tl.from(
    "#HowToPlayImg3",
    0.5,
    { display: "none", y: 40, opacity: 0 },
    "-=0.5"
  )
    .addPause()
    .to("#HowToPlayImg3", 0.5, { display: "none", y: -40, opacity: 0 })
    .to("#HowToPlay .CurrentStep", 0, { text: "4" });
  if (isSmallRes) {
    tl.to("#HowToPlay .HowToPlayText3", 0.5, {
      display: "none",
      opacity: 0,
    }).to("#HowToPlay .HowToPlayText4", 0.5, { display: "block", opacity: 1 });
  } else {
    tl.to("#SideProgressBarFull", 0.5, { height: "80%", ease: Linear.easeNone })
      .to("#SideLegend > div", 0, { clearProps: "color" }, "-=0.5")
      .to(
        "#HowToPlayDesktopSidebar .HowToPlayText4",
        0.5,
        { color: colors.darkTeal },
        "-=0.5"
      );
  }
  tl.addLabel("HowToPlayStep4");
  tl.from(
    "#HowToPlayImg4",
    0.5,
    { display: "none", y: 40, opacity: 0 },
    "-=0.5"
  )
    .addPause()
    .to("#HowToPlayImg4", 0.5, { display: "none", y: -40, opacity: 0 })
    .to("#HowToPlay .CurrentStep", 0, { text: "5" });
  if (isSmallRes) {
    tl.to("#HowToPlay .HowToPlayText4", 0.5, {
      display: "none",
      opacity: 0,
    }).to("#HowToPlay .HowToPlayText5", 0.5, { display: "block", opacity: 1 });
  } else {
    tl.to("#SideProgressBarFull", 0.5, {
      height: "100%",
      ease: Linear.easeNone,
    })
      .to("#SideLegend > div", 0, { clearProps: "color" }, "-=0.5")
      .to(
        "#HowToPlayDesktopSidebar .HowToPlayText5",
        0.5,
        { color: colors.darkTeal },
        "-=0.5"
      );
  }
  tl.addLabel("HowToPlayStep5");
  tl.from(
    "#HowToPlayImg5",
    0.5,
    { display: "none", y: 40, opacity: 0 },
    "-=0.5"
  )
    .addPause()
    .to("#HowToPlayImg5", 0.5, { display: "none", y: -40, opacity: 0 });
  if (isSmallRes) {
    tl.to("#HowToPlayMobileProgress", 0.5, {
      opacity: 0,
      display: "none",
      y: -50,
    }).to("#HowToPlay .HowToPlayText5", 0.5, { display: "none", opacity: 0 });
  } else {
    tl.to("#HowToPlayDesktopSidebar", 0.5, {
      opacity: 0,
      display: "none",
      x: -50,
    }).to("#SideLegend > div", 0, { clearProps: "color" }, "-=0.5");
  }
  tl.to("#Background2", 0, { backgroundColor: colors.stairsPurple, x: "100%" })
    .to("#Background2", 1, { x: "0%" })
    .to(
      "#HeaderBuyButton svg g",
      0.7,
      { attr: { stroke: colors.yellow } },
      "-=1"
    )
    .to(
      "#Header",
      0.7,
      { color: colors.yellow, borderColor: colors.yellow },
      "-=1"
    )
    .to("#Footer", 0.7, { color: colors.yellow }, "-=1")
    .to("#Background1", 0, { backgroundColor: colors.stairsPurple, x: "0%" })
    .to("#Background2", 0, { backgroundColor: colors.stairsPurple, x: "0%" });
  return tl;
};
