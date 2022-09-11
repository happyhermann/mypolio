import React from "react";
import styled from "styled-components";

import "remixicon/fonts/remixicon.css";

const Footers = styled.div`
  width: 100%;
  padding: 80px 25px;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef7ff;

  h3 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  span {
    font-size: 18px;
  }

  i {
    margin-right: 5px;
    font-size: 20px;
    font-weight: 300;
  }

  a {
    color: #337ab7;
  }

  .footer_box {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  p {
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) {
    padding: 100px 50px;
    p {
      margin-top: 30px;
      letter-spacing: 2px;
    }
  }
`;

export default function Footer() {
  return (
    <Footers>
      <h3>CONTACT</h3>
      <div className="footer_box">
        <i className="ri-mail-line"></i>
        <span>
          <a>carrick035@gmail</a>
        </span>
      </div>
      <div className="footer_box">
        <i class="ri-window-line"></i>
        <span>
          tistory{" "}
          <a
            href="https://carrick0708.tistory.com/"
            target="_blank"
            rel="noreferrer"
          >
            blog
          </a>
        </span>
      </div>
      <div className="footer_box">
        <i className="ri-github-fill"></i>
        <span>
          happyhermann{" "}
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            github
          </a>
        </span>
      </div>
      <p>
        <p>Thanks for visiting My Websit ©2022 </p>
      </p>
    </Footers>
  );
}
