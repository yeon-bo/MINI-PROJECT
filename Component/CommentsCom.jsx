import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { CommentsCont } from "../Component/CommentsCont.jsx";

export const CommentsCom = ({ by, text, kids, time }) => {
  const [showComment, setShowComment] = useState(false);

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value * 1000);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "recent";
    if (betweenTime < 60) {
      return `${betweenTime} minutes ago`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour} hours ago`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay} days ago`;
    }

    return `${Math.floor(betweenTimeDay / 365)} years ago`;
  }

  const CommentCont = styled.div`
    box-sizing: border-box;
    border-bottom: 1px solid #38393d;
  `;
  const UserBar = styled.div`
    position: relative;
    margin: 1.25em;
    display: flex;
    align-items: center;
    justify-content: start;
  `;
  const UserName = styled.span`
    color: #ff3e00;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    margin-right: 0.63rem;
    text-decoration: underline;
  `;
  const UserTime = styled.span`
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    letter-spacing: -0.02em;
  `;
  const AllowIcon = styled.img`
    position: absolute;
    width: 0.75em;
    right: 0;
    transform: rotate(${showComment && "180deg"});
    cursor: pointer;
  `;
  const onClick = () => {
    setShowComment(!showComment);
  };
  return (
    <CommentCont>
      <UserBar>
        <Link
          to={{
            pathname: `/userinfo/${by}`
          }}
        >
          <UserName>{by}</UserName>
        </Link>
        <UserTime>{timeForToday(time)}</UserTime>
        <AllowIcon src="../image/Allow.png" alt="Allow" onClick={onClick} />
      </UserBar>
      {showComment && <CommentsCont text={text} kids={kids} />}
    </CommentCont>
  );
};
