import styled from "styled-components";

import Header from "@/components/layout/Header";
import { MainSection } from "@/pages/MainPage/components/MainSection";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />

      <MainSection />
      <Box style={{ backgroundColor: "blue" }} />
      <Box style={{ backgroundColor: "pink" }} />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const Box = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;
