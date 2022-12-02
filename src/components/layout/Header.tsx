import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <LogoBox>투게더</LogoBox>

      <LoginBox>Login</LoginBox>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  width: 100%;
  height: 5rem;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;

const LogoBox = styled.div`
  margin-left: 3rem;
`;

const LoginBox = styled.div`
  margin-right: 3rem;
`;
