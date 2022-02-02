import styled from "@emotion/styled";

import { CardTitle } from "../Component/CardTitle.jsx";

export const HomeTab = () => {
  const TabBox = styled.div`
    display: inline-block;
    width: 20em;
    margin: 0 auto;
  `;
  const Tab = styled.div`
    height: 2.3em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const TabTitle = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #2c2d32;
    box-sizing: border-box;
    color: #6b6c70;
    font-family: ProductSansRegular;
    font-size: 1em;
  `;
  const PostBox = styled.div``;
  return (
    <TabBox>
      <Tab>
        <TabTitle>Top</TabTitle>
        <TabTitle>New</TabTitle>
        <TabTitle>Ask</TabTitle>
        <TabTitle>Show</TabTitle>
      </Tab>
      <PostBox>
        <CardTitle />
      </PostBox>
    </TabBox>
  );
};
