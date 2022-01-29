import styled from "@emotion/styled";

import { Karma } from "../Component/Karma.jsx";
import { Cardbar } from "../Component/Cardbar.jsx";

export const Newscard = () => {
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
      <News>
        <User>
          <Karma />
          <UserName>Cameron Williamson</UserName>
        </User>
        <UserTitle>
          Washington state shuts down Amazon price-fixing program nationwide
        </UserTitle>
        <UserTime>3 hours ago</UserTime>
      </News>
      <Cardbar />
    </Card>
  );
};
