import React, { useState } from "react";
import styled from "@emotion/styled";

export const Search = () => {
  const Search = styled.div`
    background-color: #18191e;
    color: #fff;
    position: relative;
    font-family: "Noto Sans KR", sans-serif;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  `;
  const Img = styled.img`
    position: absolute;
    width: 1.86em;
    left: 1.43em;
  `;
  return (
    <Search>
      <Img src="./image/logo.png" alt="logo" />
      <p>hello</p>
    </Search>
  );
};
