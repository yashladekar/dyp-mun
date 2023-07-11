export default (tl) =>
  tl
    .set("#CardTypes", { display: "flex" })
    .from("#CardTypesText", 0.3, { opacity: 0, y: "100" })
    .staggerFrom(
      "#CardTypesCards .CardType",
      1,
      {
        y: "-50",
        opacity: 0,
      },
      0.1
    )
    .addPause()
    .to("#CardTypes", 1, { opacity: 0, y: -50 })
