import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import galanoSemiBold from "./fonts/GalanoGrotesqueSemiBold.woff";
import galanoRegular from "./fonts/GalanoGrotesque.woff";
import belweLight from "./fonts/BelweLightBT.woff";
import belweMedium from "./fonts/BelweMediumBT.woff";

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: "Galano";
    src: url("${galanoSemiBold}") format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Galano";
    src: url("${galanoRegular}") format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Belwe";
    src: url("${belweMedium}") format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Belwe";
    src: url("${belweLight}") format("woff");
    font-weight: 400;
  }

  html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    touch-action: none;

    padding: 0;
    text-rendering: optimizeLegibility;
    font-family: Galano;
    font-weight: 400;

    overscroll-behavior: none;
  }
`;

export const GlobalStyleMobile = createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: "Galano";
    src: url("${galanoSemiBold}") format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Galano";
    src: url("${galanoRegular}") format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Belwe";
    src: url("${belweMedium}") format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Belwe";
    src: url("${belweLight}") format("woff");
    font-weight: 400;
  }

  html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    text-rendering: optimizeLegibility;
    font-family: Galano;
    font-weight: 400;

    overscroll-behavior: none;
  }
`;

