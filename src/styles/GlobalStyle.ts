import { createGlobalStyle } from "styled-components";
import "@/assets/fonts/font.css";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  *{
    ${reset}
    font-family: 'SCoreDream';
    font-size: 16px;
  }
`;

export default GlobalStyle;
