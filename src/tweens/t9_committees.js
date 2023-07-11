import { Linear, Power1 } from "gsap";
import { colors } from "../vars/globalVars";
export default (tl) =>
  tl
    .to(
      "#Header",
      0.7,
      { color: colors.darkTomato, borderColor: colors.darkTomato },
      "-=0.7"
    )
    .to(".DypMunLogo path", 0.7, { attr: { fill: colors.darkTomato } }, "-=0.7")
    .to(
      "#HeaderBuyButton svg g",
      0.7,
      { attr: { stroke: colors.darkTomato } },
      "-=0.7"
    )
    .to("#Footer", 0.7, { color: colors.darkTomato }, "-=0.7")
    .to("#Background1", 0, {})
    .to("#Background3", 0, { x: "100%" })
    .to("#Background1", 0, { backgroundColor: colors.offWhite })
    .to("#Background2", 0, { backgroundColor: colors.veryPink, x: "100%" })
    .to("#Background2", 0.5, { x: "0%" })
    .to("#FamilyCards", 0, { display: "flex", opacity: 1 })
    .to("#Background2", 0.5, { x: "0%" })
    .set("#Gallery", { display: "block" })
    .from("#GalleryCrownIcon1", 0.7, {
      y: "50",
      opacity: 0,
      ease: Power1.easeOut,
    })
    .from(
      "#GalleryHero1",
      0.7,
      { y: "100", opacity: 0, ease: Power1.easeOut },
      "-=0.3"
    )
    .from(
      "#GallerySidekick1",
      0.7,
      { y: "70", opacity: 0, ease: Power1.easeOut },
      "-=0.3"
    )
    .addPause()
    .to("#Background1", 0, { backgroundColor: colors.veryPink })
    .to("#Background2", 0, { backgroundColor: colors.vanilla, x: "100%" })
    .to("#GalleryCrownIcon1", 0.5, {
      y: "-100",
      opacity: 0,
      ease: Power1.easeOut,
    })
    .to(
      "#GalleryHero1",
      0.5,
      { y: "-100", opacity: 0, ease: Power1.easeOut },
      "-=0.5"
    )
    .to(
      "#GallerySidekick1",
      0.5,
      { y: "-100", opacity: 0, ease: Power1.easeOut },
      "-=0.5"
    )
    .to("#Background2", 1, { x: "0%", ease: Linear.easeNone }, "-=0.5")
    .to(
      "#Header",
      0.7,
      {
        color: colors.tomato,
        borderColor: colors.tomato,
        ease: Linear.easeNone,
      },
      "-=1"
    )
    .to(
      "#HeaderBuyButton svg g",
      0.7,
      { attr: { stroke: colors.tomato, ease: Linear.easeNone } },
      "-=1"
    )
    .to("#Footer", 0.7, { color: colors.tomato, ease: Linear.easeNone }, "-=1")
    .from(
      "#GalleryCrownIcon2",
      0.7,
      { y: "50", opacity: 0, ease: Power1.easeOut },
      "-=0.5"
    )
    .from(
      "#GalleryHero2",
      0.7,
      { y: "100", opacity: 0, ease: Power1.easeOut },
      "-=0.3"
    )
    .from(
      "#GallerySidekick2",
      0.7,
      { y: "70", opacity: 0, ease: Power1.easeOut },
      "-=0.3"
    )
    .addPause()
    .to("#Background1", 0, { backgroundColor: colors.vanilla })
    .to("#Background2", 0, { backgroundColor: colors.lighterTeal, x: "100%" })
    .to("#GalleryCrownIcon2", 0.5, {
      y: "-100",
      opacity: 0,
      ease: Power1.easeOut,
    })
    .to(
      "#GalleryHero2",
      0.5,
      { y: "-100", opacity: 0, ease: Power1.easeOut },
      "-=0.5"
    )
    .to(
      "#GallerySidekick2",
      0.5,
      { y: "-100", opacity: 0, ease: Power1.easeOut },
      "-=0.5"
    )
    .to("#Background2", 1, { x: "0%", ease: Linear.easeNone }, "-=0.5")
    .to("#Footer", 0.7, { color: colors.teal, ease: Linear.easeNone }, "-=1")
    .to(
      "#Header",
      0.7,
      { color: colors.teal, borderColor: colors.teal, ease: Linear.easeNone },
      "-=1"
    )
    .to(
      "#HeaderBuyButton svg g",
      0.7,
      { attr: { stroke: colors.teal, ease: Linear.easeNone } },
      "-=1"
    )
    .from(
      "#GalleryCrownIcon3",
      1,
      { y: "50", opacity: 0, ease: Power1.easeOut },
      "-=0.5"
    )
    .from(
      "#GalleryHero3",
      1,
      { y: "100", opacity: 0, ease: Power1.easeOut },
      "-=0.6"
    )
    .from(
      "#GallerySidekick3",
      1,
      { y: "70", opacity: 0, ease: Power1.easeOut },
      "-=0.6"
    )
    .addPause()
    .to("#Background1", 0, { backgroundColor: colors.lighterTeal })
    .to("#Background2", 0, { backgroundColor: colors.cream, x: "100%" })
    .to("#GalleryCrownIcon3", 0.5, {
      y: "-100",
      opacity: 0,
      ease: Power1.easeOut,
    })
    .to(
      "#GalleryHero3",
      0.5,
      { y: "-100", opacity: 0, ease: Power1.easeOut },
      "-=0.5"
    )
    .to(
      "#GallerySidekick3",
      0.5,
      { y: "-100", opacity: 0, ease: Power1.easeOut },
      "-=0.5"
    )
    .to("#Background2", 1, { x: "0%", ease: Linear.easeNone }, "-=0.5")
    .to(
      "#Header",
      0.7,
      {
        color: colors.darkTeal,
        borderColor: colors.darkTeal,
        ease: Linear.easeNone,
      },
      "-=1"
    )
    .to(
      "#HeaderBuyButton svg g",
      0.7,
      { attr: { stroke: colors.darkTeal, ease: Linear.easeNone } },
      "-=1"
    )
    .to(
      "#Footer",
      0.7,
      { color: colors.darkTeal, ease: Linear.easeNone },
      "-=1"
    )
    .to("#CurrentStep0", 0, { display: "inline" });
