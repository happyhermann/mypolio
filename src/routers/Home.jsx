import React from "react";
import styled from "styled-components";

import profileImg from "../assets/australia.JPG";

const Wrapper = styled.section`
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    // 데스크탑 패딩
  }
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
    font-size: 50px
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

// Exprience

const Exprience = styled.section`
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

const ExprienceDiv = styled.div`
  margin-top: 50px;
  .Exprience_type {
    font-size: 20px;
    font-weight: 500;
  }
  .Exprience_name {
    font-size: 35px;
    margin-top: 15px;
    font-weight: 600;
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
      <Banner>
        <div className="link_buttons">
          <h3 className="hello">안녕하세요 이치윤입니다.</h3>
          <p className="introduce_text">
            프론트엔드 개발자를 희망하고 있습니다.
          </p>
          <button className="resume">이력서</button>
          {/* 이력서 다운 버튼 */}
        </div>
        <div className="arrow_down_box">
          <p>LEARN MORE</p>
          <i onClick={arrowDown} className="ri-arrow-down-line arrow_down"></i>
        </div>
      </Banner>
      <Skills>
        <h3 className="Exprience_title">
          Skills<span className="dot">.</span>
        </h3>
        <Divider></Divider>
        <div className="skills_grid"></div>
      </Skills>

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
        </ExprienceDiv>
        <ExprienceDiv>
          <span className="Exprience_type">해커톤</span>
          <h4 className="Exprience_name">2022 KDT 해커톤</h4>
          <p>2022년 4월 20일 ~ 2022년 6월 15일 (2차 예선)</p>
        </ExprienceDiv>
      </Exprience>
      <Projects>
        <header>
          <h3 className="Exprience_title">
            Projects
            <span className="dot">.</span>
          </h3>
        </header>
        <Divider></Divider>
      </Projects>
    </Wrapper>
  );
}

export default Home;
