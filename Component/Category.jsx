import styled from "@emotion/styled";

import { CardTitle } from "../Component/CardTitle.jsx";

export const Category = () => {
  const CategoryBox = styled.div`
    width: 20em;
    margin: 0 auto;
  `;
  const Category = styled.div`
    height: 2.38em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const CategoryTitle = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #2c2d32;
    color: #6b6c70;
    font-family: ProductSansRegular;
    font-size: 1em;
    line-height: 1.21em;
  `;
  const PostBox = styled.div``;
  return (
    <CategoryBox>
      <Category>
        <CategoryTitle>Top</CategoryTitle>
        <CategoryTitle>New</CategoryTitle>
        <CategoryTitle>Ask</CategoryTitle>
        <CategoryTitle>Show</CategoryTitle>
      </Category>
      <PostBox>
        <CardTitle />
        <CardTitle />
      </PostBox>
    </CategoryBox>
  );
};
