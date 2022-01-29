import styled from "@emotion/styled";

import { Karma } from "../Component/Karma.jsx";
import { Cardbar } from "../Component/Cardbar.jsx";

export const DailyNews = () => {
  const Title = styled.h3`
    font-family: ProductSansBold;
    font-weight: bold;
    font-size: 28px;
    line-height: 2.13rem;
    color: #fff;
    margin: 1.25rem;
    display: flex;
  `;
  const Card_cont = styled.div`
    position: relative;
    height: 16.94em;
    margin: 0.25em 0 1.75em 1.25em;
  `;
  const Cards = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
  `;
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
    border: 1px solid #ddd;
    position: relative;
  `;
  const User = styled.div`
    position: absolute;
  `;
  const UserName = styled.span`
    float: left;
    font-family: ProductSansRegular;
    font-size: 0.75em;
    line-height: 1em;
    color: #ffffff;
    margin-top: 0.4em;
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
    <>
      <Title>Daily News</Title>
      <Card_cont>
        <Cards>
          <Card>
            <News>
              <User>
                <Karma />
                <UserName>Cameron Williamson</UserName>
              </User>
              <UserTitle>
                Washington state shuts down Amazon price-fixing program
                nationwide
              </UserTitle>
              <UserTime>3 hours ago</UserTime>
            </News>
          </Card>
          <Card></Card>
        </Cards>
      </Card_cont>
    </>
  );
};
