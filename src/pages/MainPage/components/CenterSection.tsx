import React from "react";
import styled from "styled-components";

const CenterSection = () => {
  return <Wrapper>CenterSection</Wrapper>;
};

export default CenterSection;

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  background-color: rgb(245, 245, 245);
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
