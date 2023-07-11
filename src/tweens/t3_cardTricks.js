import { colors } from "../vars/globalVars";
const cardWidth = window.innerHeight < 841 ? 221 : 276;
const isSmallRes = window.innerWidth < 768;
const ismediumRes = window.innerWidth < 1001;
export default (tl) => {
  tl.to(".DypMunLogo path", 0.7, { attr: { fill: colors.pink } }, "-=0.7");
  if (isSmallRes) {
    tl
      .to("#CardsGallery .Card", 0, {
        display: "block",
        opacity: 1,
        clearProps: "position, top, right, bottom, left",
        marginLeft: "40px",
        className: "+=cursorOn",
      })
      .fromTo(
        "#CardsGallery",
        0.7,
        { transform: "translateY(100%)" },
        {
          transform: "translateY(0)",
          display: "flex",
          opacity: 1,
          justifyContent: "flex-start",
        },
        "-=0.5"
      )
      .to("#Footer", 0.7, { color: colors.pink }, "-=1")
      .from("#ProgressBar", 1, { display: "none", opacity: 0 }, "-=0.7")
      .addPause();
    for (let i = 1; i < 10; i++) {
      tl
        .to("#CardsGallery", 0.5, {
          transform: () => {
            return `translateX(-${i * cardWidth + i * 40}px)`;
          },
        })
        .to(
          "#ProgressBar > div",
          0.4,
          {
            width: () => `${(i + 1) * 10}%`,
          },
          "-=0.4"
        )
        .addPause();
    }
  } else {
    tl
      .to("#CardsGallery .Card", 1, {
        className: "+=cursorOn",
        left: (i) => {
          const cardWidth = window.innerHeight < 841 ? 193 : 276;
          const margin = i < 1 ? 0 : 40;
          return `${i * cardWidth + i * margin}px`;
        },
        transform: "translateX(0)",
        display: "block",
        opacity: 1,
        delay: (i) => i * 0.1,
      })
      .to("#Background2", 1, { x: "0%" }, "-=1")
      .to(
        "#Card1 img",
        1,
        { boxShadow: "10px 10px 0px rgba(237, 31, 86, 0.15)" },
        "-=1"
      )
      .to(
        "#Card1 .CardBack",
        1,
        { boxShadow: "10px 10px 0px rgba(237, 31, 86, 0.15)" },
        "-=1"
      )
      .to("#Footer", 0.7, { color: colors.pink }, "-=1")
      .from("#ProgressBar", 1, { display: "none", opacity: 0 }, "-=1")
      .addPause()
      .to("#CardsGallery", 1, {
        transform: () => {
          const i = 3;
          return `translateX(-${i * cardWidth + i * 40}px)`;
        },
      })
      .to(
        "#ProgressBar > div",
        1,
        {
          width: () => "60%",
        },
        "-=0.9"
      )
      .addPause()
      .to("#CardsGallery", 1, {
        transform: () => {
          const i = 6;
          return `translateX(-${i * cardWidth + i * 40}px)`;
        },
      })
      .to(
        "#ProgressBar > div",
        1,
        {
          width: () => (ismediumRes ? "90%" : "100%"),
        },
        "-=0.9"
      )
      .addPause();
    if (ismediumRes) {
      tl
        .to("#CardsGallery", 1, {
          transform: () => {
            const i = 7;
            return `translateX(-${i * cardWidth + i * 40}px)`;
          },
        })
        .to("#ProgressBar > div", 1, { width: "100%" }, "-=0.9");
    }
  }
  tl
    .staggerTo(
      "#CardsGallery .Card",
      0.5,
      {
        transform: "translateY(-100%)",
        display: "none",
        opacity: 0,
      },
      0.1
    )
    .to("#CardsGallery", 1, { display: "none", opacity: 0 })
    .to("#ProgressBar", 1, { display: "none", opacity: 0 }, "-=2")
    .to("#Background1", 0, { backgroundColor: colors.offWhite })
    .to("#Background2", 0, { backgroundColor: colors.veryPink, x: "100%" })
    .to("#FamilyCards", 0, { display: "flex", opacity: 1 })
    .to("#Background2", 0.5, { x: "0%" })
    .staggerFrom(
      "#FamilyCards .Card",
      0.5,
      {
        y: "-50",
        opacity: 0,
      },
      0.1,
      "-=0.5"
    )
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
    .to("#HeaderMenu .Menu-Item", 0, { className: "-=active" }, "-=0.7")
    .to("#HeaderMenu .Gallery", 0, { className: "+=active" })
    .addLabel("Gallery")
    .to("#FamilyCards .Card", 0.7, { margin: 0, delay: 0.3 })
    .addPause()
    .to("#FamilyCards", 0.7, { y: "-50", display: "none", opacity: 0 });
  return tl;
};
