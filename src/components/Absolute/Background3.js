import React from "react";
import styled from "styled-components";
import { colors } from "../../vars/globalVars";

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${colors.darkTomato};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background3 = () => (
  <Container id="Background3" />
);

export default Background3;
