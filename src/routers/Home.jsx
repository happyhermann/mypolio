// eslint-disable-next-line

import React, { useState } from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import profileImg from "../assets/australia.JPG";
import { Routes, Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

import "remixicon/fonts/remixicon.css";

// Header

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  width: 100%;
  background-color: #202224;
  color: white;
  z-index: 1;
  position: fixed;
  top: 0;

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
    top: 18px;
    right: 50px;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 90px;

    i {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    padding: 24px 100px;

    i {
      display: none;
    }
  }
`;

const Name = styled.div`
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const NavUl = styled.ul`
  display: flex;
  color: white;
  opacity: 0.8;

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

// Home

const Wrapper = styled.section`
  width: 100%;
  line-height: 34px;

  .english_text {
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: 400;
  }

  .check {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    margin-right: 10px;
    color: rgb(255, 174, 0);
  }

  .project_img_box {
    margin-top: 15px;
    img {
      margin-bottom: 15px;
    }
  }

  .project_detail_box {
    margin-bottom: 20px;
    margin-top: 15px;
  }

  // 프로젝트 관련링크 위
`;

// Banner

const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.4)),
    url(${profileImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  color: white;
  position: relative;

  .hello {
    font-size: 45px;
    margin-bottom: 20px;
    font-family: "Do Hyeon", sans-serif;
  }

  .introduce_text {
    font-size: 25px;
    font-family: "Do Hyeon", sans-serif;
  }

  .arrow_down_box {
    opacity: 0.7;
    margin: 0 auto;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }

  .arrow_down {
    font-size: 35px;
    cursor: pointer;
  }

  .resume {
    margin-top: 20px;
    background-color: #ed4933;
    box-shadow: none !important;
    height: 3.75em;
    line-height: 3.75em;
    appearance: none;
    border-radius: 3px;
    border: 0;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    height: 3.125em;
    letter-spacing: 0.225em;
    line-height: 3.125em;
    max-width: 35em;
    padding: 0 2.75em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // 모바일
  @media screen and (max-width: 768px) {
    height: 70vh;
    padding: 20px;

    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
      url(${profileImg}); // 텍스트
    .arrow_down_box {
      p {
        display: none;
      }
    }
    .arrow_down {
      display: none;
    }

    .hello {
      font-size: 23px;
    }
    .introduce_text {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    .hello {
      font-size: 28px;
      margin-bottom: 22px;
    }

    .introduce_text {
      font-size: 22px;
    }
  }
`;

const PaddingBox = styled.section`
  padding: 30px;
  width: 100%;

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .skill {
      margin-top: 55px;
    }
    .skill_img_box {
      width: 120px;
      img {
        width: 100%;
        height: 120px;
      }
    }
    .skill_text {
      font-size: 22px;
      font-weight: 400;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .skill_detail {
      font-size: 17px;
      margin-bottom: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 60px;
    // 데스크탑 패딩

    .skill {
      margin-top: 35px;
    }

    .skill_img_box {
      width: 80px;
      img {
        width: 100%;
        height: 80px;
      }
      margin-bottom: 15px;
    }

    .skill_text {
      font-size: 20px;
      font-weight: 400;
      margin-top: 15px;
      margin-bottom: 28px;
    }

    .skill_detail {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .skills_grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 50px;
    }
  }
`;

// Exprience

const Exprience = styled.section`
  padding: 20px;

  .dot {
    font-size: 50px;
    color: rgb(248, 205, 7);
  }

  @media screen and (max-width: 768px) {
    .Exprience_title {
      font-size: 25px;
      font-weight: 800;

      margin-bottom: 30px;
    }
    .Exprience_date {
      margin-bottom: 15px;
    }

    .dot {
      font-size: 30px;
      color: rgb(248, 205, 7);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 50px;
    // 데스크탑 패딩
    .Exprience_title {
      font-size: 50px;
      font-weight: 800;
      margin-bottom: 30px;
    }
    .dot {
      font-size: 50px;
      color: rgb(248, 205, 7);
    }
    .Exprience_date {
      margin-bottom: 20px;
    }
  }

  a {
    text-decoration: underline;
    background: linear-gradient(
        to right,
        transparent 50%,
        rgb(255, 218, 55) 50%
      )
      0px 0px / 200%;
    text-underline-offset: 3.5px;
    transition: all 0.25s ease 0s;
    font-size: 20px;
  }
`;

const ExprienceDiv = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    .Exprience_type {
      font-size: 22px;
      font-weight: 500;
    }
    .Exprience_name {
      font-size: 28px;
      margin-top: 15px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      font-weight: 600;
    }
    .project_img {
      width: 80%;
      height: 200px;
    }

    h5 {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 15px;
    }
  }
  @media screen and (min-width: 768px) {
    .Exprience_type {
      font-size: 25px;
      font-weight: 500;
    }
    .Exprience_name {
      font-size: 35px;
      margin-top: 15px;
      font-weight: 800;
      margin-bottom: 25px;
    }
    p {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 25px;
    }
    .project_img {
      width: 600px;
      height: 400px;
      margin-bottom: 25px;
    }
  }
`;

// skills
const Skills = styled.section`

padding: 20px;

.dot {
  font-size: 50px;
  color: rgb(248, 205, 7);
}

@media screen and (max-width: 768px) {
  .Exprience_title {
    font-size: 25px;
    font-weight: 800;

    margin-bottom: 30px;
  }
  .Exprience_date {
    margin-bottom: 15px;
  }

  .dot {
    font-size: 30px;
    color: rgb(248, 205, 7);
  }
}

@media screen and (min-width: 768px) {
  padding: 50px;
  // 데스크탑 패딩
  .Exprience_title {
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 30px;
  }
  .dot {
    font-size: 50px;
    color: rgb(248, 205, 7);
  }
  .Exprience_date {
    margin-bottom: 20px;
  }
}

a {
  text-decoration: underline;
  background: linear-gradient(
      to right,
      transparent 50%,
      rgb(255, 218, 55) 50%
    )
    0px 0px / 200%;
  text-underline-offset: 3.5px;
  transition: all 0.25s ease 0s;
  font-size: 20px;
}


  . 
`;

// projects

const Projects = styled(Exprience)`
  padding: 20px;

  .dot {
    font-size: 50px;
    color: rgb(248, 205, 7);
  }

  .Exprience_title {
    font-size: 50px;
    font-weight: 800;
  }

  @media screen and (min-width: 768px) {
    padding: 50px;
    // 데스크탑 패딩
  }
`;

const Divider = styled.div`
  height: 6.5px;
  margin-top: 30px;
  background-color: rgb(248, 205, 7);
`;

function Home() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // nav 스타일링
  const [currentTab, setCurrentTab] = useState();

  const tabRef = useRef([]);

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  // if clicked, scrolling to the top

  const arrowDown = () => {
    window.scrollTo(1200, 1200);
  };

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

  AOS.init({
    duration: 2000,
    once: true,
  });

  return (
    <>
      <Headers>
        <Name className="myName">
          <h1 onClick={onTop}>이치윤입니다</h1>
        </Name>
        <i
          onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
          className="ri-menu-line menuButton"
        ></i>
        <Dropdown visibility={dropdownVisibility}>
          <NavUl className="nav_ul">
            <NavLi
              onClick={() => {
                tabRef.current[0].scrollIntoView();
                setCurrentTab(tabRef.current[0]);
              }}
              className="nav_list"
            >
              <span className="list_text">Skills</span>
            </NavLi>
            <NavLi
              onClick={() => {
                tabRef.current[1].scrollIntoView();
                setCurrentTab(tabRef.current[1]);
              }}
            >
              <span className="list_text">Exprience</span>
            </NavLi>
            <NavLi
              onClick={() => {
                tabRef.current[2].scrollIntoView();
                setCurrentTab(tabRef.current[2]);
              }}
            >
              <span className="list_text">Project</span>
            </NavLi>
            <NavLi
              onClick={() => {
                tabRef.current[3].scrollIntoView();
                setCurrentTab(tabRef.current[3]);
              }}
            >
              <span className="list_text">Others</span>
            </NavLi>
            <NavLi
              onClick={() => {
                tabRef.current[3].scrollIntoView();
                setCurrentTab(tabRef.current[4]);
              }}
            >
              <span className="list_text">Contact</span>
            </NavLi>
          </NavUl>
        </Dropdown>
      </Headers>
      <Wrapper>
        <div class="item" data-aos="zoom-in">
          <Banner>
            <div className="link_buttons">
              <h3 className="hello">안녕하세요 이치윤입니다.</h3>
              <div className="introduce_text_box">
                <p className="introduce_text">
                  프론트엔드 개발자를 희망하고 있습니다.
                </p>
                <p className="introduce_text">
                  사회와 공동체, 사람들과 어울리고 의견을 나누는 것을
                  좋아합니다.
                </p>
                <p className="introduce_text">
                  무엇이든 관심이 생기면 빠르게 도전하고 실행하며, 공부하는 것을
                  즐깁니다.
                </p>
              </div>

              <div className="resume_box">
                <a
                  href="https://docs.google.com/document/d/1CMDTlrBCXD7ewJduL-MP5FS8QGFkoQrx/edit?usp=sharing&ouid=111426158461567987589&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="resume">이력서</button>
                </a>
              </div>
              {/* 이력서 다운 버튼 */}
            </div>
            <div class="item" data-aos="fade-down"></div>
          </Banner>
        </div>

        <PaddingBox>
          <div
            ref={(el) => (tabRef.current[0] = el)}
            class="item"
            data-aos="fade-right"
          >
            <Skills>
              <h3 className="Exprience_title">
                Skills<span className="dot">.</span>
              </h3>
              <Divider></Divider>
              <div className="grid_box">
                <div className="skills_grid">
                  <div class="item" data-aos="fade-right">
                    <li className="skill">
                      <div className="skill_img_box">
                        <img
                          className="skill_img"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"
                          alt="javascript"
                        />
                      </div>
                      <p className="skill_text">css3</p>
                      <ol>
                        <li className="skill_detail">
                          - Grid, Flex 레이아웃 이해
                        </li>
                        <li className="skill_detail">
                          - Media Query 반응형 설계 가능
                        </li>
                      </ol>
                    </li>
                  </div>
                  <div class="item" data-aos="fade-right">
                    <li className="skill">
                      <div className="skill_img_box">
                        <img
                          className="skill_img"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png"
                          alt="javascript"
                        />
                      </div>
                      <p className="skill_text">javascript</p>
                      <ol>
                        <li className="skill_detail"> - 비동기에 대한 이해</li>
                        <li className="skill_detail">
                          {" "}
                          - ES6 이상의 문법 사용
                        </li>
                      </ol>
                    </li>
                  </div>
                  <div class="item" data-aos="fade-right">
                    <li className="skill">
                      <div className="skill_img_box">
                        <img
                          className="skill_img"
                          src="https://www.elbuild.it/assets/img/techs/typescript.png"
                          alt="typescript"
                        />
                      </div>
                      <p className="skill_text">typescript</p>
                      <ol>
                        <li className="skill_detail"> - 객체 Type 다루기</li>
                        <li className="skill_detail">
                          {" "}
                          - 상속과 인터페이스 사용
                        </li>
                      </ol>
                    </li>
                  </div>
                  <div class="item" data-aos="fade-right">
                    <li className="skill">
                      <div className="skill_img_box">
                        <img
                          className="skill_img"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png "
                          alt="reactJS"
                        />
                      </div>
                      <p className="skill_text">reactJS</p>
                      <ol>
                        <li className="skill_detail"> - Hooks 사용</li>
                        <li className="skill_detail"> - Axios 비동기 통신</li>
                        <li className="skill_detail">
                          {" "}
                          - Redux, Recoil 상태 관리
                        </li>
                      </ol>
                    </li>
                  </div>
                  <div class="item" data-aos="fade-right">
                    <li className="skill">
                      <div className="skill_img_box">
                        <img
                          className="skill_img"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
                          alt="sass"
                        />
                      </div>
                      <p className="skill_text">sass</p>
                      <ol>
                        <li className="skill_detail">
                          {" "}
                          - 변수, 믹스인, 모듈 사용
                        </li>
                      </ol>
                    </li>
                  </div>
                  <div class="item" data-aos="fade-right">
                    <li className="skill">
                      <div className="skill_img_box">
                        <img
                          className="skill_img"
                          src="https://miro.medium.com/max/1400/1*l4nfMFKxfT4yNTWUK2Vsdg.png"
                          alt="sass"
                        />
                      </div>
                      <p className="skill_text">styled-components</p>
                      <ol>
                        <li className="skill_detail">
                          - theme을 활용해 스타일링 일관성 유지 가능
                        </li>
                        <li className="skill_detail">
                          {" "}
                          - js로 동적이고 유연한 스타일링 구현
                        </li>
                      </ol>
                    </li>
                  </div>
                  <div class="item" data-aos="fade-right">
                    <li className="skill">
                      <div className="skill_img_box">
                        <img
                          className="skill_img"
                          src="https://assets-global.website-files.com/61c1a51822d2e922c98f9255/61f7e1885f0e93f3eb20987c_61ee8c522dd4c343976eebef_logo-git-icon-e1639407240682.png"
                          alt="git logo"
                        />
                      </div>
                      <p className="skill_text">Git</p>
                      <ol>
                        <li className="skill_detail">
                          협업 메인 브랜치 관리 : PR, Merge 경험 (팀 프로젝트)
                        </li>
                        <li className="skill_detail">
                          프로젝트 코드 관리, add, commit, pull, push, branch
                          사용
                        </li>
                      </ol>
                    </li>
                  </div>
                </div>
              </div>
            </Skills>
          </div>

          <div
            ref={(el) => (tabRef.current[1] = el)}
            class="item"
            data-aos="zoom-in"
          >
            <Exprience>
              <header>
                <h3 className="Exprience_title">
                  Exprience
                  <span className="dot">.</span>
                </h3>
              </header>
              <Divider></Divider>
              {/* 여기서는 모바일이랑 데스크탑으로 나눠서 박스 나열 */}
              <ExprienceDiv>
                <span className="Exprience_type">부트캠프</span>
                <h4 className="Exprience_name">
                  패스트캠퍼스 메가바이트 스쿨 <br /> 프론트엔드 과정
                </h4>
                <p>2022년 4월 11일 ~ 2022년 7월 29일 (수료)</p>
                <ul className="project_detail_box">
                  <li>
                    {" "}
                    <svg
                      class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                    전공, 비전공자가 섞여 하나의 조를 이루어 4개월간 코딩 스터디
                  </li>
                  <li>
                    {" "}
                    <svg
                      class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                    협업 프로젝트 3개 경험 (JS 미니, 리액트 미니, 파이널
                    프로젝트 경험)
                  </li>
                </ul>
              </ExprienceDiv>
              <ExprienceDiv>
                <span className="Exprience_type">해커톤</span>
                <h4 className="Exprience_name">2022 KDT 해커톤</h4>
                <p>2022년 4월 20일 ~ 2022년 6월 15일 (2차 예선)</p>
              </ExprienceDiv>
              <ul className="project_detail_box">
                <li>
                  {" "}
                  <svg
                    class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                  참가팀 150팀중 상위 50팀 안에 들어 1, 2차예선 통과
                </li>
                <li>
                  {" "}
                  <svg
                    class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                  git을 활용하면서 겪은 이슈들을 함께 해결해 나가는 경험을 함
                </li>
                <li>
                  {" "}
                  <svg
                    class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                  아이디어, 회의, 기획, 디자인, 설계, 기대효과 및 앱의
                  활용방안까지 경험
                </li>

                <li>
                  {" "}
                  <svg
                    class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                  개발외에도 고려해야할 점이 많고 협업중 의사소통의 중요성을
                  실감, 의견차이와 갈등 해소 등을 경험
                </li>
              </ul>
            </Exprience>
          </div>

          <div
            ref={(el) => (tabRef.current[2] = el)}
            class="item"
            data-aos="zoom-in"
          >
            <Projects>
              <header>
                <h3 className="Exprience_title">
                  Projects
                  <span className="dot">.</span>
                </h3>
              </header>
              <Divider></Divider>
              <div class="item" data-aos="zoom-in">
                <ExprienceDiv>
                  <div className="project_img_box">
                    <img
                      className="project_img"
                      src="https://user-images.githubusercontent.com/92570023/188264648-b5e26082-22bf-4215-8d49-ca7092754ec9.gif"
                      width="300px"
                      height="300px"
                      title=""
                      alt="RubberDuck"
                    ></img>
                  </div>
                  <span className="Exprience_type">개인 프로젝트</span>

                  <h4 className="Exprience_name">레디북스 온라인 서점</h4>
                  <p>2022년 8월 1일 ~ 2022년 9월 5일</p>
                  <ul className="project_detail_box">
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      리디북스 온라인 서점 반응형 웹 레이아웃, 스타일 클론
                    </li>

                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      typescript를 사용하여 개발환경 구축
                    </li>
                    <li>
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      Recoil 라이브러리를 이용하여 전역적 상태관리
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      Axios ‘GET’ ‘POST’를 사용하여 XML 데이터 간편하게 통신
                      카카오 책 검색 API를 ‘GET’ 메서드를 통해 받아와서 도서
                      검색 search창에 검색 관련 도서 데이터를 바인딩 회원가입,
                      로그인, 로그아웃 기능을 (패스트캠퍼스 파이널 프로젝트때
                      제공받은) ‘POST’ 메서드를 사용하여 구현{" "}
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      recoil/persist로 전역적 상태관리 로그인에 성공하면 해당
                      API 응답에 token이 실려오는데 이 것을 조건문으로 받아
                      로그인에 성공했다면 응답된 데이터 객체에 있는 닉네임,
                      아이디, 비밀번호에 있는 값들을 persist를 통해 로컬
                      스토리지에 저장 하고 useNavigate를 통해 홈 화면으로
                      이동하게 함 도서 검색 결과 data 및 사용자 검색 기록,
                      찜하기 기능등을 recoil state로 관리
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      각종 JS 배열 메서드를 이용하여 검색 결과 data를 10개
                      객체로 페이지당 포스트 갯수로 할당해 Pagination 구현
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      style component를 사용하여 조건부 스타일링 동적인 UI 구현
                      : useState로 사용자 버튼 클릭시 슬라이더 좌우로 움직이게
                      해주는 function에서 값을 받아서 props를 통해 css 제어
                      전역적/선택적 코드 관리 : GlobalStyle과 ThemeProvider를
                      전역적인 CSS 코드 관리 (common style) 미디어 쿼리 반응형
                      웹 구현 : typescript theme에 mobile-width : 768px;
                      선언하고 간편히 사용
                    </li>
                  </ul>
                  <div>
                    <h5 style={{ marginBottom: "10px" }}>관련 링크</h5>

                    <svg
                      class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>

                    <a
                      href="https://readybooks.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      레디북스 Demo 배포 사이트
                    </a>
                  </div>
                  <div>
                    <svg
                      class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                    <a
                      href="https://github.com/happyhermann/readybook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      레디북스 GitHub Readme
                    </a>
                  </div>
                </ExprienceDiv>
              </div>

              <br />

              <br />

              <br />
              <hr />
              <br />
              <div class="item" data-aos="zoom-in">
                <ExprienceDiv>
                  <div className="project_img_box">
                    <img
                      className="project_img"
                      src="https://camo.githubusercontent.com/d01706e98847f54c6605f53d6e48fb87b34812c5ae1c49f1dfc1a4d1d0507ff7/68747470733a2f2f7777772e6e6f74696f6e2e736f2f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324662613363346561642d393736352d346336362d623130332d3736363862353133343863302532466d61696e30312e6769663f7461626c653d626c6f636b2669643d31613430666362372d346362382d343836642d616364652d62613865346234383835646126737061636549643d33656638646264392d343134632d346366352d383133642d333265636239343363633637267573657249643d65633061666565312d656535662d346639332d616634352d3435313631386566623063612663616368653d7632"
                      alt="img"
                    />
                  </div>
                  <span className="Exprience_type">팀 프로젝트</span>

                  <h4 className="Exprience_name">핀 테크 웹 프로젝트</h4>
                  <p>2022년 6월 22일 ~ 2022년 7월 22일</p>

                  <ul className="project_detail_box">
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      패스트캠퍼스 프론트엔드 스쿨 3기 수강생 4명 참여
                    </li>

                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      피그마를 통한 디자인 시안 제작, 만든 시안을 팀원들에게
                      공유
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      미디어 쿼리를 이용해 부분적 반응형 웹 구현 (모바일 -
                      데스크탑)
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      style component를 사용하여 동적인 UI 구현 useState로
                      state를 관리하고 props를 통해 세로 스크롤 값이나
                      브라우저내 클릭한 위치 (e.target), 캐러셀 값 (vw) 등을
                      css에 전달하여 동적 스타일링을 간편하게 제어
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      redux를 이용해 회원 정보 정보 수정 페이지 기능 구현
                      (닉네임, 이미지) reducer를 이용해 기본 닉네임, 이미지와
                      사용자가 입력한 값 조건적 출력 구현
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      gitHub 해당 프로젝트 저장소 담당 역할, Merge 및 conflict
                      solve 담당
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      메인 페이지 전체 기능 구현 백그라운드 이미지에 동영상 자동
                      재생 구현 (youtube Iframe API 사용) 배경 고정 스크롤 구현
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      다양한 라이브러리를 활용하여 애니메이션 기능 구현
                    </li>
                    <li>
                      {" "}
                      <svg
                        class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                      프로젝트 팀장으로서 프로젝트 회의 일정 관리 및
                      커뮤니케이션 중재, 기술 스펙 작성등의 개발 외적인 일도
                      추가적으로 담당
                    </li>
                  </ul>
                  <div>
                    <h5 style={{ marginBottom: "10px" }}>관련 링크</h5>
                    <div>
                      <div>
                        <svg
                          class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                        <a
                          href="https://happyhermann.github.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          핀 테크 웹 사이트 Demo 배포 사이트
                        </a>
                      </div>

                      <div>
                        <svg
                          class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                        <a
                          href="https://happyhermann.github.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          핀 테크 GitHub Readme
                        </a>
                      </div>
                    </div>
                  </div>
                </ExprienceDiv>
              </div>

              <br />

              <br />

              <br />
              <hr />
              <br />

              <div class="item" data-aos="zoom-in">
                <ExprienceDiv>
                  <div className="project_img_box">
                    <img
                      className="project_img"
                      src="https://empty-property-3db.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5b81cf71-85a0-478e-b61b-d1ec9da8243e%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-06-21_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.46.24.png?table=block&id=41a68a7e-3566-4dcd-9ea2-d41e79fbb675&spaceId=04ca7445-ea89-4fd8-933c-595ab53ba0ae&width=580&userId=&cache=v2"
                      alt="img"
                    />
                  </div>
                  <span className="Exprience_type">팀 프로젝트</span>
                  <h4 className="Exprience_name">줍고 플로깅 웹 앱</h4>
                  <p className="Exprience_date">
                    2022년 5월 10일 ~ 2022년 6월 15일
                  </p>
                  <div>
                    <ul className="project_detail_box">
                      <li>
                        {" "}
                        <svg
                          class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                        KDT 해커톤 프로젝트 2차 예선 제출 웹 앱
                      </li>

                      <li>
                        {" "}
                        <svg
                          class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                        패스트캠퍼스 프론트엔드 스쿨 3기 수강생 4명 참여
                      </li>
                      <li>
                        {" "}
                        <svg
                          class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                        해당 프로젝트 미디어쿼리와 부트스트랩으로 반응형 웹 구현
                        - 부트스트랩 반응형 그리드 시스템을 써서 모바일 시안부터
                        마크업 함 -미디어 쿼리를 사용해 합의한 breakpoint를
                        기준으로 모바일과 데스크탑 시안을 나눠 스타일링
                      </li>
                      <li>
                        {" "}
                        <svg
                          class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                        카카오맵 API를 사용하여 메인 (러닝) 페이지에서 사용자
                        현재 위치 찾기를 웹에서 사용할 수 있게 구현 현재 위치의
                        경도와 위도를 불러오고 현재 위치로 정렬해주는 click
                        이벤트 커스템 구현
                      </li>
                      <li>
                        {" "}
                        <svg
                          class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                        react-hook으로 프로필 페이지 구현 및 프로필 편집 기능
                        구현 로컬 스토리지 메서드 (get, setItem)으로 임시적 회원
                        정보 수정 구현 => 추후 redux persist나 recoil persist를
                        사용해서 리팩토링하려 했음
                      </li>
                    </ul>
                    <h5 style={{ marginBottom: "10px" }}>관련 링크</h5>
                    <svg
                      class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                    <a
                      href="https://jubgo.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      줍고 Demo 배포 사이트
                    </a>
                  </div>
                  <div>
                    <svg
                      class="MuiSvgIcon-root Explain__ExplainCheckIcon-sc-1huy195-2 gCPosX check"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                    <a
                      href="https://github.com/happyhermann/hackaton_plogging"
                      target="_blank"
                      rel="noreferrer"
                    >
                      줍고 GitHub Repository Readme
                    </a>
                  </div>
                </ExprienceDiv>
              </div>

              <br />

              <br />

              <br />
              <hr />
              <br />

              <div class="item" data-aos="zoom-in">
                <ExprienceDiv>
                  <span className="Exprience_type">개인 프로젝트</span>
                  <h4 className="Exprience_name">쿠우우팡 플레이 OTT 웹</h4>
                  <p>2022년 8월 22일 ~ 2022년 9월 (진행중)</p>
                </ExprienceDiv>
              </div>
            </Projects>
          </div>
          <div
            ref={(el) => (tabRef.current[3] = el)}
            class="item"
            data-aos="zoom-in"
          >
            <Exprience>
              <header>
                <h3 className="Exprience_title">
                  Others
                  <span className="dot">.</span>
                </h3>
              </header>
              <Divider></Divider>
              {/* 여기서는 모바일이랑 데스크탑으로 나눠서 박스 나열 */}
              <ExprienceDiv>
                <p className="english_text">- 영어 회화 (토론 가능 수준)</p>
                <p className="english_text">
                  - 아이엘츠 5.5 (국제 공인 영어 능력 평가 시험)
                </p>
                <p className="english_text">
                  - 애들레이드 워킹 홀리데이 (2018년 12월 ~ 2019년 9월)
                </p>
                <p className="english_text">
                  - 경동대학교 간호학과, 의대 교수 초빙 강연 실시간 통역 경험
                  보유 (2019년 10월)
                </p>
                <hr />
                <h4>+ Learning</h4>
                <br />
                <div className="learning_box">
                  <p className="english_text">
                    노마드 코더 코코아톡 클론 / 크롬 클론 코딩 - 2021.10 ~ 11
                  </p>
                  <p className="english_text">
                    김버그 HTML / CSS (DOM) - 2021.11 ~ 2022.12
                  </p>
                  <p className="english_text">
                    드림코딩 브라우저 101 (DOM) - 2021.12 ~ 2022.01
                  </p>
                  <p className="english_text">
                    모던 자바스크립트 Deep Dive - 2022.04 ~
                  </p>

                  <p className="english_text">
                    코딩 애플 리액트 입문 - 2021.05 ~ 2022.06
                  </p>
                  <p className="english_text">
                    노마드 코더 리액트 마스터 클래스 - 2021.07 ~ 2022.09
                  </p>
                  <p className="english_text">
                    김민태 프론트 엔드 아카데미 - 2021.08 ~
                  </p>
                </div>
              </ExprienceDiv>
            </Exprience>
          </div>
        </PaddingBox>
      </Wrapper>
      <Footer ref={(el) => (tabRef.current[4] = el)} />
    </>
  );
}

export default Home;
