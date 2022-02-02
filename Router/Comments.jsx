import "../src/styles.css";
import styled from "@emotion/styled";

import { Backallow } from "../Component/Backallow";
import { CommentsCom } from "../Component/CommentsCom";
import { CommentsCom2 } from "../Component/CommentsCom2";

export const Comments = () => {
  const TitleBack = styled.div`
    height: 4.15em;
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
    <div className="App">
      <Backallow />
      <TitleBack>
        <Title>Comments</Title>
      </TitleBack>
      <CommentsCom2 />
      <CommentsCom />
    </div>
  );
};
