import { Power3 } from "gsap";
import { colors } from "../vars/globalVars";
const isLandscape = window.innerHeight <= window.innerWidth;
const isSmallRes = window.innerWidth < 768;
export default tl => {
  tl
    .set("#FamilyPage", { display: "flex" })
    .to("#Background1", 1, {})
    .to("#Background3", 0, { x: "100%" })
    .to("#FamilyPage", 1, { top: "50%" })
    .from("#FamilyCard", 1, { y: "100%", opacity: 0 })
    .from("#Header", 0.5, { y: -80, opacity: 0 }, "-=0.5")
    .from("#Footer", 0.5, { y: 80, opacity: 0 }, "-=0.5")
    .from("#FamilyPageHero", 0.5, { transform: "translateY(100%)", opacity: 0 }, "-=0.3")
    .from("#FamilyPageHeroSubtitle", 0.5, { transform: "translateY(100%)", opacity: 0 }, "-=0.3")
    .fromTo("#MouseScroll", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.3")
    .to("#Header", 0.7, { color: () => isSmallRes ? colors.skyBlue : colors.white, borderColor: colors.skyBlue, ease: Power3.easeIn }, "-=0.7")
    .to("#HeaderBuyButton svg g", 0.7, { attr: { stroke: () => isSmallRes ? colors.skyBlue : colors.white }, ease: Power3.easeIn }, "-=0.7")
    .to("#Background1", 0, { backgroundColor: colors.lightBlue })
    .to("#LandingPage", 0, { display: "none" })
    .addLabel('Intro')
    .addPause()
    .to("#FamilyPageHero", 0.5, { transform: "translateY(-100%)", opacity: 0 })
    .to("#FamilyPageHeroSubtitle", 0.5, { transform: "translateY(-100%)", opacity: 0 })
    .to("#MouseScroll", 0.5, { opacity: 0 }, "-=0.3")
    .to("#FamilyPage", 1, {
      rotation: isLandscape ? 180 : 0,
      y: "-50%",
      width: () => {
        if(window.innerHeight < 841) {
          if (isLandscape) return 369;
          return 221;
        } else {
          if (isLandscape) return 461;
          return 276;
        }
      },
      height: () => {
        if(window.innerHeight < 841) {
          if (isLandscape) return 221;
          return 369;
        } else {
          if (isLandscape) return 276;
          return 461;
        }
      },
      marginTop: 0,
      opacity: 0,
      borderRadius: 5,
      boxShadow: isLandscape ? "10px -10px rgba(30,81,163,0.15)" : "10px 10px 0px rgba(30,81,163,0.15);",
      ease: Power3.easeIn
    }, "-=0.2")
    .to("#FamilyCard", 1, {
      height: () => {
        if (isSmallRes) {
          if(window.innerHeight < 841) return 369;
          return 461;
        }
        return "300%";
      },
      rotation: isLandscape ? -90 : 0,
      y: 0,
      ease: Power3.easeIn
    }, "-=1");
  if (!isSmallRes) {
    tl
      .to("#FamilyCard", 0.5, {
        height: window.innerHeight < 841 ? 369 : 461,
        ease: Power3.easeIn
      }, "-=0.5");
  }
  tl
    .set("#GameDetails", { display: 'flex' })
    .to("#Header", 0.7, { color: colors.skyBlue, borderColor: colors.skyBlue, ease: Power3.easeIn }, "-=0.7")
    .to(".DypMunLogo path", 0.7, { attr: { fill: colors.skyBlue }, ease: Power3.easeIn }, "-=0.7")
    .to("#HeaderBuyButton svg g", 0.7, { attr: { stroke: colors.skyBlue }, ease: Power3.easeIn }, "-=0.7")
    .to("#Footer", 0.7, { color: colors.skyBlue, ease: Power3.easeIn }, "-=1")
    .from("#HeaderMenu", 0.7, { y: -50, opacity: 0 });
  return tl;
};
