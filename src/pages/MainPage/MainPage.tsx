import styled from "styled-components";

import Header from "@/components/layout/Header";
import MainSection from "@/pages/MainPage/components/MainSection";
import CenterSection from "@/pages/MainPage/components/CenterSection";
import FinalSection from "@/pages/MainPage/components/FinalSection";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />

      <MainSection />
      <CenterSection />
      <FinalSection />
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
