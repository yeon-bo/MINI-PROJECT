import React, { useState } from "react";
import styled from "@emotion/styled";

export const Search = () => {
  const Search = styled.div`
    background-color: #18191e;
    position: relative;
    font-family: "Noto Sans KR", sans-serif;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    height: 4.57em;
  `;
  const Logo = styled.img`
    position: absolute;
    width: 1.86em;
    top: 1.14em;
    left: 1.43em;
  `;
  const SearchBox = styled.div`
    position: absolute;
    height: 2.29em;
    width: 17.21em;
    top: 1.14em;
    left: 4.57em;
  `;
  const SearchInput = styled.input`
    background-color: #2c2d32;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    border: none;
    caret-color: #ff3f01;
    &:focus {
      outline: none;
    }
  `;
  const Help = styled.img`
    position: absolute;
    width: 1.29em;
    top: 1.64em;
    right: 1.43em;
  `;
  const SearchIcon = styled.img`
    position: absolute;
    width: 0.94em;
    top: 0.7em;
    left: 0.59em;
  `;
  const Placeholder = styled.p`
    position: absolute;
    top: 0.7em;
    left: 2.14em;
    line-height: 1.17em;
    color: #838489;
  `;
  return (
    <Search>
      <Logo src="./image/logo.png" alt="logo" />
      <SearchBox>
        <SearchInput type="text" />
        <SearchIcon src="./image/Search.png" alt="Search" />
        <Placeholder>Search</Placeholder>
      </SearchBox>
      <Help src="./image/Help.png" alt="Help" />
    </Search>
  );
};
