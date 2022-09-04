import React from "react";
import styled from "styled-components";

import profileImg from "../assets/australia.JPG";

const Wrapper = styled.section`
  width: 100%;
`;

const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)),
    url(${profileImg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  color: white;

  .hello {
    font-size: 45px;
    margin-bottom: 20px;
    font-family: "Do Hyeon", sans-serif;
  }

  .introduce_text {
    font-size: 25px;
    font-family: "Do Hyeon", sans-serif;
  }

  @media screen and (min-width: 768px) {
  }
`;

function Home() {
  return (
    <Wrapper>
      <Banner>
        <h3 className="hello">안녕하세요 이치윤입니다.</h3>
        <p className="introduce_text">프론트엔드 개발자를 희망하고 있습니다.</p>
      </Banner>
    </Wrapper>
  );
}

export default Home;
