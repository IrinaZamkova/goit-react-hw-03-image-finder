import { createGlobalStyle } from "styled-components";

const MainStyled = createGlobalStyle`
html {
  box-sizing: border-box;
  /* height: 100%; 
  overflow:auto; */
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  padding-bottom: 20px;
  height:100%;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}
`;

export default MainStyled;
