import React from "react";
import styled from "styled-components";
import { colors } from "../../vars/globalVars";

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background2 = () => (
  <Container id="Background2" />
);

export default Background2;
