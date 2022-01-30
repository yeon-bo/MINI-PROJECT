import styled from "@emotion/styled";

import { CommentsCont } from "../Component/CommentsCont.jsx";

export const CommentsCom = () => {
  const CommentCont = styled.div`
    box-sizing: border-box;
    border-bottom: 1px solid #38393d;
  `;
  const UserBar = styled.div`
    position: relative;
    margin: 1.25em;
    display: flex;
    align-items: center;
    justify-content: start;
  `;
  const UserName = styled.span`
    color: #ff3e00;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    margin-right: 0.63rem;
    text-decoration: underline;
  `;
  const UserTime = styled.span`
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
  `;
  const AllowIcon = styled.img`
    position: absolute;
    width: 0.75em;
    transform: rotate(180deg);
    right: 0;
  `;
  return (
    <CommentCont>
      <UserBar>
        <UserName>doctoboggan</UserName>
        <UserTime>30 minutes ago</UserTime>
        <AllowIcon src="./image/Allow.png" alt="Allow" />
      </UserBar>
      <CommentsCont />
    </CommentCont>
  );
};