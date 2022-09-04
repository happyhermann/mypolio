import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../theme";

import Dropdown from "./Dropdown";

import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  position: fixed;
  width: 100%;
  top: 0;
  position: relative;
  background-color: #202224;
  color: white;

  // fade in
  @keyframes slide-fade-in-dropdown-animation {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  .slide-fade-in-dropdown {
    overflow: hidden;
  }

  .slide-fade-in-dropdown > {
    animation: slide-fade-in-dropdown-animation 0.4s ease;
  }

  .menuButton {
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 50px;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 100px;

    i {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    padding: 15px 100px;

    i {
      display: none;
    }
  }
`;

const Name = styled.div`
  color: white;
  font-size: 18px;
`;

const NavUl = styled.ul`
  display: flex;
  color: white;

  justify-content: space-between;
`;

const NavLi = styled.li`
  font-size: 17px;
  margin-right: 35px;
  color: white;

  .list_text {
    cursor: pointer;
  }
`;

function Header() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const resizingHandler = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setDropdownVisibility(false);
    }
    window.addEventListener("resize", resizingHandler);
    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, [isMobile]);

  console.log(isMobile, window.innerWidth);

  return (
    <Headers>
      <Name className="myName">
        <h1>이치윤입니다</h1>
      </Name>
      <i
        onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
        className="ri-menu-line menuButton"
      ></i>
      <Dropdown visibility={dropdownVisibility}>
        <NavUl className="nav_ul">
          <NavLi className="nav_list">
            <span className="list_text">About Me</span>
          </NavLi>
          <NavLi>
            <span className="list_text">Skills</span>
          </NavLi>
          <NavLi>
            <span className="list_text">Project</span>
          </NavLi>
          <NavLi>
            <span className="list_text"> Contact</span>
          </NavLi>
        </NavUl>
      </Dropdown>
    </Headers>
  );
}

export default Header;
