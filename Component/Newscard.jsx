import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { SuperKarma } from "../Component/SuperKarma.jsx";
import { NormalKarma } from "../Component/NormalKarma.jsx";
import { Karma } from "../Component/Karma.jsx";
import { Cardbar } from "../Component/Cardbar.jsx";

export const Newscard = ({ by, title, karma, comment, url, time, kids }) => {
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

  const Card = styled.div`
    width: 17.75em;
    height: 100%;
    background-color: #2c2d32;
    border-radius: 0.38em;
    + div {
      margin-left: 1em;
    }
  `;
  const News = styled.div`
    height: 14.94em;
    padding: 1em;
    box-sizing: border-box;
    position: relative;
  `;
  const User = styled.div`
    position: absolute;
  `;
  const UserName = styled.span`
    float: left;
    font-family: ProductSansRegular;
    font-size: 0.75em;
    line-height: 0.91rem;
    color: #ffffff;
    margin-top: 0.25rem;
  `;
  const UserTitle = styled.p`
    position: absolute;
    font-family: ProductSansBold;
    font-size: 1.63em;
    line-height: 2.11rem;
    color: #ffffff;
    margin-top: 2.88rem;
    text-align: left;
    width: 15.75rem;
    height: 8.5rem;
    overflow: hidden;
  `;
  const UserTime = styled.p`
    position: absolute;
    font-family: "Source Code Pro", monospace;
    font-size: 0.63em;
    line-height: 0.81rem;
    color: #838489;
    margin-top: 12.13rem;
  `;
  return (
    <Card>
      <Link to="/detail">
        <News>
          <User>
            {karma >= 30 ? (
              karma > 36100 ? (
                <SuperKarma />
              ) : (
                <NormalKarma />
              )
            ) : (
              <Karma />
            )}
            <Link
              to={{
                pathname: `/userinfo/${by}`
              }}
            >
              <UserName>{by}</UserName>
            </Link>
          </User>
          <UserTitle>{title}</UserTitle>
          <UserTime>{timeForToday(time)}</UserTime>
        </News>
      </Link>
      <Cardbar karma={karma} comment={comment} url={url} by={by} kids={kids} />
    </Card>
  );
};
