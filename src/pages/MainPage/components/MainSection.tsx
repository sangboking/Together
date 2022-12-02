import React from "react";
import styled from "styled-components";

const MainSection = () => {
  return (
    <Wrapper>
      <CenterBox>
        <Title>투게더와 함께 하세요!</Title>

        <SemiTitle>
          투게더로 <br /> 모임과 일정을 함께!
        </SemiTitle>
      </CenterBox>
    </Wrapper>
  );
};

export default MainSection;

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  background-color: rgb(245, 245, 245);
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterBox = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #191919;
  font-weight: 400;
  font-size: 1.5rem;
`;

const SemiTitle = styled.h2`
  color: #191919;
  font-weight: 500;
  font-size: 2rem;
  margin-top: 4rem;
  text-align: center;
`;
