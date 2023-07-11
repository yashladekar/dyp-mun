import React from "react";
import { colors } from "../vars/globalVars";
import background from "../assets/img/campus6.jpg";
import Footer from "../components/Absolute/Footer";

const Intro = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundImage: "url(" + background + ")",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      justifyContent: "flex-end",
      "&::before": {
        content: `''`,
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: 0.6,
        zIndex: 2,
      },
    }}
  >
    <h1
      style={{
        alignSelf: "flex-end",
        textAlign: "left",
        padding: "0 20px",
        marginBottom: "50px",
        fontSize: "29px",
        letterSpacing: "0px",
        color: colors.white,
      }}
    >
      DY PATIL INTERNATIONAL MUN 2022-2023{" "}
    </h1>
    <Footer color={colors.white} />
  </div>
);

export default Intro;
