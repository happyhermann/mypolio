// eslint-disable-next-line

import React from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import profileImg from "../assets/australia.JPG";
import { Routes, Link } from "react-router-dom";

AOS.init({
  duration: 2000,
});

const Wrapper = styled.section`
  width: 100%;

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
      font-size: 32px;
    }
    .introduce_text {
      font-size: 18px;
    }
  }
`;

const PaddingBox = styled.section`
  @media screen and (max-width: 768px) {
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    padding: 60px;
    // 데스크탑 패딩
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
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      font-weight: 600;
    }
    .project_img {
      width: 600px;
      height: 400px;
    }
  }
`;

// skills
const Skills = styled(Exprience)``;

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
  const arrowDown = () => {
    window.scrollTo(1200, 1200);
  };

  return (
    <Wrapper>
      <div class="item" data-aos="zoom-in">
        <Banner>
          <div className="link_buttons">
            <h3 className="hello">안녕하세요 이치윤입니다.</h3>
            <p className="introduce_text">
              프론트엔드 개발자를 희망하고 있습니다.
            </p>
            <button className="resume">이력서</button>
            {/* 이력서 다운 버튼 */}
          </div>
          <div class="item" data-aos="fade-down"></div>
        </Banner>
      </div>

      <PaddingBox>
        <div class="item" data-aos="fade-right">
          <Skills>
            <h3 className="Exprience_title">
              Skills<span className="dot">.</span>
            </h3>
            <Divider></Divider>
            <div className="skills_grid"></div>
          </Skills>
        </div>

        <div class="item" data-aos="fade-right">
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
              <div></div>
            </ExprienceDiv>
            <ExprienceDiv>
              <span className="Exprience_type">해커톤</span>
              <h4 className="Exprience_name">2022 KDT 해커톤</h4>
              <p>2022년 4월 20일 ~ 2022년 6월 15일 (2차 예선)</p>
            </ExprienceDiv>
          </Exprience>
        </div>

        <Projects>
          <header>
            <h3 className="Exprience_title">
              Projects
              <span className="dot">.</span>
            </h3>
          </header>
          <Divider></Divider>
          <div class="item" data-aos="zoom-in">
            {" "}
            <ExprienceDiv>
              <span className="Exprience_type">개인 프로젝트</span>
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
              <h4 className="Exprience_name">레디북스 온라인 서점</h4>
              <p>2022년 8월 1일 ~ 2022년 9월 5일</p>
              <ul className="project_detail_box">
                <li className="project_detail_list">123</li>
              </ul>
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
                  레디북스 GitHub Repository Readme
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
              <span className="Exprience_type">팀 프로젝트</span>
              <div className="project_img_box">
                <img
                  className="project_img"
                  src="https://camo.githubusercontent.com/d01706e98847f54c6605f53d6e48fb87b34812c5ae1c49f1dfc1a4d1d0507ff7/68747470733a2f2f7777772e6e6f74696f6e2e736f2f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324662613363346561642d393736352d346336362d623130332d3736363862353133343863302532466d61696e30312e6769663f7461626c653d626c6f636b2669643d31613430666362372d346362382d343836642d616364652d62613865346234383835646126737061636549643d33656638646264392d343134632d346366352d383133642d333265636239343363633637267573657249643d65633061666565312d656535662d346639332d616634352d3435313631386566623063612663616368653d7632"
                  alt="img"
                />
              </div>

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
                  마크업&디자인 프로필 수정 메인페이지 담당
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
                  Github, Notion 등 협업 워크플로우 경험
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
                  기획, 마크업, 기능 구현 등 프로젝트 구체적 내용 설정
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
                  API 활용 능력 향상
                </li>
              </ul>
              <div>
                <h5>관련 링크</h5>
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
                      핀 테크 웹 사이트 GitHub Repository Readme
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
                    Github, Notion 등 협업 워크플로우 경험
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
                    미디어 쿼리를 사용한 반응형 마크업 구현
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
                    카카오 맵 API를 통해 런닝 페이지 구현
                  </li>
                </ul>
                <h5>관련 링크</h5>
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

          <div class="item" data-aos="zoom-in">
            <ExprienceDiv>
              <span className="Exprience_type">개인 프로젝트</span>
              <h4 className="Exprience_name">쿠우우팡 플레이 OTT 웹</h4>
              <p>2022년 8월 22일 ~ 2022년 9월 (진행중)</p>
            </ExprienceDiv>
          </div>
        </Projects>
      </PaddingBox>
    </Wrapper>
  );
}

// 관련 링크
// 플로깅 : https://jubgo.herokuapp.com/
// 레디북스 : https://readybooks.netlify.app/
// 랜드마크 : https://happyhermann.github.io/
// 쿠우우팡

export default Home;
