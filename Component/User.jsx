import styled from "@emotion/styled";

import { SuperKarma } from "../Component/SuperKarma.jsx";
import { NormalKarma } from "../Component/NormalKarma.jsx";
import { Karma } from "../Component/Karma.jsx";

export const User = ({ id, karma, created }) => {
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

  const UserCont = styled.div`
    margin-top: 1em;
    margin-left: 1.26em;
  `;
  const UserName = styled.span`
    display: block;
    display: flex;
    color: #fff;
    font-family: ProductSansRegular;
    font-size: 1.5em;
    line-height: 1.82rem;
    margin-top: 0.13rem;
  `;
  const UserInfo = styled.div`
    display: flex;
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.91rem;
    width: 20rem;
    margin-top: 0.38rem;
  `;
  return (
    <UserCont>
      {karma >= 30 ? (
        karma > 36100 ? (
          <SuperKarma />
        ) : (
          <NormalKarma />
        )
      ) : (
        <Karma />
      )}
      <UserName>{id}</UserName>
      <UserInfo>
        {karma} karma | joined {timeForToday(created)}
      </UserInfo>
    </UserCont>
  );
};
