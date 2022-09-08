import React from "react";

import Router from "./routers/Router";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  
    ${reset}
    
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        // 스크롤 메서드 스무스하게

        
        
    }
    body{
        font-family: 나눔스퀘어, 'NanumSquare', sans-serif;  
         background-color: #ffffff;
 


    }
    a {
        color: inherit;
        text-decoration: none;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
    h1, h2, h3, h4, h5, h6{
        
     }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
