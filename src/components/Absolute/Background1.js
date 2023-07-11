import React from "react";
import styled from "styled-components";
import { colors } from "../../vars/globalVars";

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background1 = () => (
  <Container id="Background1" />
);

export default Background1;
