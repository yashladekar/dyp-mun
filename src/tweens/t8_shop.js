import { colors } from "../vars/globalVars";
const isSmallRes = window.innerWidth < 768;
export default (tl) => {
  tl.to("#Background2", 1, { backgroundColor: colors.stairsPurple, x: "0%" })
    .set("#Shop", { display: "flex" })
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
    .to(
      "#Background2",
      0.3,
      { backgroundColor: colors.stairsPurple, x: isSmallRes ? "0%" : "0%" },
      "-=0.3"
    )
    .to("#HeaderMenu .Menu-Item", 0, { className: "-=active" }, "-=0.7")
    .to("#HeaderMenu .Shop", 0, { className: "+=active" })
    .from("#ShopTitle", 0.5, { y: 100, opacity: 0 })
    .from("#ShopSubtitle", 0.5, { y: 100, opacity: 0 }, "-=0.3")
    .from("#ShopBuyNow", 0.5, { y: 100, opacity: 0 }, "-=0.3")
    .from("#DeckImg", 1, { y: 100, opacity: 0 }, "-=0.5")
    .addLabel("Shop")
    .addPause()
    .to("#ShopTitle", 1, { y: -100, opacity: 0 })
    .to("#ShopSubtitle", 1, { y: -100, opacity: 0 }, "-=1")
    .to("#ShopBuyNow", 1, { y: -100, opacity: 0 }, "-=1")
    .to("#DeckImg", 1, { y: -100, opacity: 0 }, "-=1");
  if (!isSmallRes) {
    tl.to("#Background2", 0.4, { x: "100%" });
  }
  tl
    //.addPause()
    .to("#ShopTitle", 1, { y: -100, opacity: 0 })
    .to("#ShopSubtitle", 1, { y: -100, opacity: 0 }, "-=1")
    .to("#ShopBuyNow", 1, { y: -100, opacity: 0 }, "-=1")
    .to("#ShopImg", 1, { y: -100, opacity: 0 }, "-=1")
    .to("#Background3", 0, { x: "100%", backgroundColor: colors.vanilla })
    .to("#Background3", 0.6, { x: "0%" })
    .to(
      "#Header",
      0.7,
      { color: colors.brown, borderColor: colors.brown },
      "-=1"
    )
    .to(
      "#HeaderBuyButton svg g",
      0.7,
      { attr: { stroke: colors.brown } },
      "-=0.7"
    )
    .to("#Footer", 0.7, { color: colors.brown }, "-=1")
    .to("#Background1", 0, { backgroundColor: colors.vanilla })
    .to("#Background2", 0, { backgroundColor: colors.darkVanilla, x: "100%" })
    .to("#Background3", 0, { x: "100%" });
  if (!isSmallRes) {
    tl.to("#Background2", 0.4, { x: "50%" });
  }
  tl
    .set("#Wallpapers", { display: "flex" })
    .from("#WallpapersTitle", 0.5, { y: 100, opacity: 0 })
    .from("#WallpapersSubtitle", 0.5, { y: 100, opacity: 0 }, "-=0.3")
    .from("#WallpapersBuyNow", 0.5, { y: 100, opacity: 0 }, "-=0.3")
    .from("#WallpapersImg", 1, { y: 100, opacity: 0 }, "-=0.5")
    .addPause()
    .to("#WallpapersTitle", 1, { y: -100, opacity: 0 })
    .to("#WallpapersSubtitle", 1, { y: -100, opacity: 0 }, "-=1")
    .to("#WallpapersBuyNow", 1, { y: -100, opacity: 0 }, "-=1")
    .to("#WallpapersImg", 1, { y: -100, opacity: 0 }, "-=1")
    .set("#StayInTouch", { display: "flex" })
    .to("#Background1", 1, { x: "100%" })
    .to("#Background2", 1, { x: "100%" })
    .to("#StayInTouchEmail", 0, { display: "flex" })
    .to("#HeaderMenu .Menu-Item", 0, { className: "-=active" }, "-=0.7")
    .from("#StayInTouchLogo", 1, { y: 100, opacity: 0 })
    .from("#StayInTouchTitle", 1, { y: 100, opacity: 0 }, "-=0.5")
    .from("#StayInTouchSubtitle", 1, { y: 100, opacity: 0 }, "-=0.5")
    .from("#StayInTouchEmail", 1, { y: 100, opacity: 0 }, "-=0.5")
    .addLabel("GetCloser");
  return tl;
};
