import styled from "@emotion/styled";

import { CommentsCom } from "../Component/CommentsCom.jsx";

export const Comments = () => {
  const TitleBack = styled.div`
    height: 4.38em;
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    border-bottom: 1px solid #38393d;
  `;
  const Title = styled.span`
    color: #fff;
    font-family: ProductSansBold;
    font-size: 1.88em;
    line-height: 2.27rem;
    margin-left: 1.25rem;
  `;
  return (
    <>
      <TitleBack>
        <Title>Comments</Title>
      </TitleBack>
      <CommentsCom />
      <CommentsCom />
      <CommentsCom />
    </>
  );
};
