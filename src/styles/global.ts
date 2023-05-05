import { createGlobalStyle } from "styled-components";

import CircularStdLight from "../assets/fonts/CircularStd-Light.otf";
import CircularStdBook from "../assets/fonts/CircularStd-Book.otf";
import CircularStdMedium from "../assets/fonts/CircularStd-Medium.otf";
import CircularStdBold from "../assets/fonts/CircularStd-Bold.otf";

const GlobalStyle = createGlobalStyle`
  
  @font-face {
  font-family: 'CircularStd';
  src: url(${CircularStdLight}) format('opentype');
  font-weight: 300;
  font-style: normal;
  }
  
  @font-face {
  font-family: 'CircularStd';
  src: url(${CircularStdBook}) format('opentype');
  font-weight: normal;
  font-style: normal;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url(${CircularStdMedium}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
  font-family: 'CircularStd';
  src: url(${CircularStdBold}) format('opentype');
  font-weight: bold;
  font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    color: #b3b3b3;
    text-transform: none;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }

  *{
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'CircularStd', sans-serif
  }

  :root{
    @media (min-width: 768px){
      font-size: 100%;
    }

    @media (min-width: 1024px){
      
    }

    @media (min-width: 1920px){
      
    }
  }
`;

export default GlobalStyle;
