import styled from "@emotion/styled";

import { Karma } from "../Component/Karma.jsx";

export const User = () => {
  const UserCont = styled.div`
    margin-top: 1em;
    margin-left: 1.26em;
    float: left;
  `;
  const UserName = styled.span`
    float: left;
    color: #fff;
    font-family: ProductSansRegular;
    font-size: 1.5em;
    line-height: 1.82rem;
    margin-top: 0.13rem;
  `;
  const UserInfo = styled.div`
    float: left;
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.91rem;
    margin-top: 0.38rem;
  `;
  return (
    <UserCont>
      <Karma />
      <UserName>Cameron Williamson</UserName>
      <UserInfo>41439 karma | joined 15 years ago</UserInfo>
    </UserCont>
  );
};
