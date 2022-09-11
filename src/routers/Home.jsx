// eslint-disable-next-line

import React from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import profileImg from "../assets/australia.JPG";
import { Routes, Link } from "react-router-dom";

const Wrapper = styled.section`
  width: 100%;

  .english_text {
    font-size: 18px;
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
  const arrowDown = () => {
    window.scrollTo(1200, 1200);
  };

  AOS.init({
    duration: 2000,
    once: true,
  });

  return (
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
                사회와 공동체, 사람들과 어울리고 의견을 나누는 것을 좋아합니다.
              </p>
              <p className="introduce_text">
                무엇이든 관심이 생기면 빠르게 도전하고 실행하며, 공부하는 것을
                즐깁니다.
              </p>
            </div>

            <div className="resume_box">
              <button className="resume">이력서</button>
            </div>
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
                      <li className="skill_detail"> - ES6 이상의 문법 사용</li>
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
                        프로젝트 코드 관리, add, commit, pull, push, branch 사용
                      </li>
                    </ol>
                  </li>
                </div>
              </div>
            </div>
          </Skills>
        </div>

        <div class="item" data-aos="zoom-in">
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
                  협업 프로젝트 3개 경험 (JS 미니, 리액트 미니, 파이널 프로젝트
                  경험)
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
                개발외에도 고려해야할 점이 많고 협업중 의사소통의 중요성을 실감,
                의견차이와 갈등 해소 등을 경험
              </li>
            </ul>
          </Exprience>
        </div>

        <div class="item" data-aos="zoom-in">
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
                    반응형 웹 디자인 적용
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
                    타입스크립트와 리액트를 활용하여 구현
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
                    카카오 도서 검색 API를 axios를 사용하여 데이터 통신
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
                    useForm으로 Validation 간단 구현 (회원가입, 로그인,
                    로그아웃) 구현
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
                    styled-components로 동적인 UI 관리 및 전역적 스타일링 설정
                  </li>
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
        <div class="item" data-aos="zoom-in">
          <Exprience>
            <header>
              <h3 className="Exprience_title">
                English
                <span className="dot">.</span>
              </h3>
            </header>
            <Divider></Divider>
            {/* 여기서는 모바일이랑 데스크탑으로 나눠서 박스 나열 */}
            <ExprienceDiv>
              <p className="english_text">- 아이엘츠 5.5 (2021년 4월 취득)</p>
              <p className="english_text">
                - 애들레이드 워킹 홀리데이 (2018년 12월 ~ 2019년 9월)
              </p>
              <p className="english_text">
                - 경동대학교 간호학과, 뉴욕대 의대 교수 초빙 통역 (2019년 10월)
              </p>
            </ExprienceDiv>
          </Exprience>
        </div>
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
