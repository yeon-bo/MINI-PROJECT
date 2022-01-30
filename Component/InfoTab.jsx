import styled from "@emotion/styled";

import { CardTitle } from "../Component/CardTitle.jsx";
import { CardTitle2 } from "../Component/CardTitle2.jsx";

export const InfoTab = () => {
  const Intro = styled.span`
    display: inline-block;
    color: #cecfd4;
    font-family: ProductSansRegular;
    font-size: 0.81em;
    line-height: 1rem;
    text-align: left;
    margin: 1.5rem 1.25rem 2rem;
    height: 4rem;
    overflow: hidden;
  `;
  const TabBox = styled.div`
    display: inline-block;
    width: 20em;
    margin: 0 auto;
  `;
  const Tab = styled.div`
    height: 1.63em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const TabTitle = styled.div`
    width: 33.33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #2c2d32;
    box-sizing: border-box;
    color: #6b6c70;
    font-family: ProductSansBold;
    font-size: 0.75em;
    line-height: 0.91rem;
  `;
  const PostBox = styled.div``;
  return (
    <>
      <Intro>
        Viverra proin vulputate in hac at sit non. Aliquet pellentesque nibh sem
        molestie vitae lacus, sed id sem. Dolor ultrices commodo ac varius
        morbi. Viverra proin vulputate in hac at sit non.
      </Intro>
      <TabBox>
        <Tab>
          <TabTitle>Submission</TabTitle>
          <TabTitle>Comments</TabTitle>
          <TabTitle>Favorites</TabTitle>
        </Tab>
        <PostBox>
          <CardTitle2 />
          <CardTitle />
        </PostBox>
      </TabBox>
    </>
  );
};
