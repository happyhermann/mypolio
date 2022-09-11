import React from "react";
import styled from "styled-components";

const Section = styled.section`
  @media screen and (max-width: 768px) {
    display: none;
    ${(props) => (props.visibility ? `display: block` : "none")};

    .nav_ul {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 58px;

      left: 0;
      background-color: transparent;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .nav_list {
    }
    .list_text {
      display: inline-block;
      margin-bottom: 5px;
      font-size: 20px;
      padding: 10px;
      margin-left: 20px;
    }
    .list_text:last-child {
      margin-bottom: 5px;
    }
  }
`;

export default function Dropdown(props) {
  return <Section visibility={props.visibility}>{props.children}</Section>;
}
