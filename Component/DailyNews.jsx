import styled from "@emotion/styled";

import { Newscard } from "../Component/Newscard.jsx";

export const DailyNews = () => {
  const Title = styled.h3`
    font-family: ProductSansBold;
    font-size: 1.75em;
    line-height: 2.12rem;
    color: #fff;
    margin: 1.15rem 1.25rem 1.4rem;
    text-align: left;
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
  return (
    <>
      <Title>Daily News</Title>
      <Card_cont>
        <Cards>
          <Newscard />
          <Newscard />
        </Cards>
      </Card_cont>
    </>
  );
};
