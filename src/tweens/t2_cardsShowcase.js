import { colors } from "../vars/globalVars";
const isSmallRes = window.innerWidth < 768;
export default (tl) => {
  if (isSmallRes) {
    tl.from("#GameDetails", 0.7, { top: "-100%", opacity: 0 }, "-=0.3")
      .to(
        "#FamilyPage",
        0.7,
        {
          top: "55%",
          transform: "translateY(0)",
        },
        "-=1"
      )
      .to("#GameDetailCards", 0, { display: "flex", opacity: 1 })
      .to("#FamilyPage", 0, { display: "none" })
      .to("#GDCard1", 1, {
        display: "flex",
        opacity: 1,
        onComplete: () => {
          const video = document.querySelector("#GDCard2 video");
          if (video) {
            return video.play();
          }
        },
        onReverseComplete: () => {
          const video = document.querySelector("#GDCard2 video");
          if (video) {
            return video.pause();
          }
        },
      })
      .addLabel("TheGame")
      .addPause()
      .to("#GameDetails", 1, { height: "-150px", display: "none", opacity: 0 })
      .to(
        "#GameDetailCards",
        0.7,
        { display: "flex", opacity: 1, top: 0, height: "100%" },
        "-=0.7"
      )
      .to("#GDCard1", 1, { justifyContent: "center" }, "-=1")
      .to("#GDCard1Title", 0.5, { display: "block", opacity: 1 }, "-=1")
      .to("#GDCard1Description", 0.5, { display: "block", opacity: 1 }, "-=1")
      .addLabel("Cards")
      .addPause()
      .to("#GDCard1", 0.7, {
        top: -300,
        display: "none",
        opacity: 0,
        onComplete: () => {
          const video = document.querySelector("#GDCard1 video");
          if (video) {
            return video.pause();
          }
        },
        onReverseComplete: () => {
          const video = document.querySelector("#GDCard1 video");
          if (video) {
            return video.play();
          }
        },
      })
      .from(
        "#Background2",
        1,
        { backgroundColor: colors.offWhite, y: "100%" },
        "-=0.5"
      )
      .fromTo(
        "#GDCard2",
        0.7,
        { top: 300 },
        {
          top: 0,
          height: "100%",
          display: "flex",
          opacity: 1,
          onComplete: () => {
            const video = document.querySelector("#GDCard2 video");
            if (video) {
              return video.play();
            }
          },
          onReverseComplete: () => {
            const video = document.querySelector("#GDCard2 video");
            if (video) {
              return video.pause();
            }
          },
        },
        "-=0.7"
      )
      .to("#Background2", 0.5, { backgroundColor: colors.offWhite }, "-=0.5")
      .to("#GDCard2Title", 0.5, { display: "block", opacity: 1 }, "-=0.7")
      .to("#GDCard2Description", 0.5, { display: "block", opacity: 1 }, "-=0.7")
      .to(".DypMunLogo path", 0.5, { attr: { fill: colors.pink } }, "-=0.7")
      .to(
        "#Header",
        0.5,
        { color: colors.pink, borderColor: colors.pink },
        "-=0.7"
      )
      .to(
        "#HeaderBuyButton svg g",
        0.7,
        { attr: { stroke: colors.pink } },
        "-=0.7"
      )
      .to("#Footer", 0.5, { color: colors.pink }, "-=0.7")
      .addPause()
      .to("#GameDetailCards", 1, {
        top: "-100%",
        display: "none",
        opacity: 0,
        onComplete: () => {
          const video = document.querySelector("#GDCard2 video");
          if (video) {
            return video.pause();
          }
        },
        onReverseComplete: () => {
          const video = document.querySelector("#GDCard2 video");
          if (video) {
            return video.play();
          }
        },
      })
      .to("#Card1Title, #Card2Title, #Card1Description, #Card2Description", 0, {
        display: "none",
        opacity: 0,
        y: "-100%",
      })
      .set("#Cards", { display: "flex" });
  } else {
    tl.from("#GameDetails", 0.3, { top: "150px", opacity: 0 }, "-=0.3")
      .to("#FamilyPage", 0, { display: "none" })
      .set("#Cards", { display: "flex" })
      .to("#CardsGallery", 0, { display: "flex", opacity: 1 })
      .to("#FamilyPage", 0, { display: "none" })
      .to("#Card1", 0.7, { display: "block", opacity: 1, position: "absolute" })
      .addLabel("TheGame")
      .addPause()
      .set("#Background2", { backgroundColor: colors.offWhite, x: "100%" })
      .to("#CardsGallery .Card:not(:first-child)", 0, {
        position: "absolute",
        left: "200%",
      })
      .to("#Background2", 1, { x: "50%" })
      .to(
        "#Header",
        0.7,
        { color: colors.pink, borderColor: colors.pink },
        "-=1"
      )
      .to(
        "#HeaderBuyButton svg g",
        0.7,
        { attr: { stroke: colors.pink } },
        "-=1"
      )
      .to("#Footer", 0.7, { color: colors.skyBlue }, "-=1")
      .to("#GameDetails", 0.5, { y: -100, opacity: 0 }, "-=1")
      .to(
        "#Card1",
        0.7,
        {
          left: "25%",
          transform: "translateX(-50%)",
        },
        "-=1"
      )
      .to(
        "#Card2",
        0.7,
        {
          left: "75%",
          transform: "translateX(-50%)",
          display: "block",
          opacity: 1,
        },
        "-=0.7"
      )
      .to("#HeaderMenu .Menu-Item", 0, { className: "-=active" }, "-=0.7")
      .to("#HeaderMenu .Cards", 0, { className: "+=active" })
      .from("#Card1Title", 0.5, { display: "none", opacity: 0, y: "100%" })
      .from(
        "#Card2Title",
        0.5,
        { display: "none", opacity: 0, y: "100%" },
        "-=0.5"
      )
      .from("#Card1Description", 0.5, {
        display: "none",
        opacity: 0,
        y: "100%",
      })
      .from(
        "#Card2Description",
        0.5,
        { display: "none", opacity: 0, y: "100%" },
        "-=0.5"
      )
      .addLabel("Cards")
      .addPause()
      .to("#Card1Title", 0.5, { display: "none", opacity: 0, y: "-100%" })
      .to(
        "#Card2Title",
        0.5,
        { display: "none", opacity: 0, y: "-100%" },
        "-=0.5"
      )
      .to("#Card1Description", 0.5, { display: "none", opacity: 0, y: "-100%" })
      .to(
        "#Card2Description",
        0.5,
        { display: "none", opacity: 0, y: "-100%" },
        "-=0.5"
      );
  }
  return tl;
};
