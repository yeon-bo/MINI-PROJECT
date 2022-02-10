import styled from "@emotion/styled";
import React, { useState } from "react";

import { CommentsComRe } from "../Component/CommentsComRe.jsx";

export const CommentsCont = ({ text, kids }) => {
  const [showComment, setShowComment] = useState(false);
  const UserText = styled.p`
    display: block;
    text-align: left;
    color: #cecfd4;
    font-family: Roboto;
    font-size: 1em;
    line-height: 1.3rem;
    margin: 2.2rem 1.25rem 1rem;
  `;
  const More = styled.button`
    display: block;
    border: none;
    background: none;
    text-decoration: underline;
    margin: 1.25rem;
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    padding: 0;
  `;
  const onClick = (e) => {
    setShowComment(!showComment);
  };
  return (
    <>
      <UserText dangerouslySetInnerHTML={{ __html: `${text}` }}></UserText>
      <More onClick={onClick}>more..</More>
      {showComment && <CommentsComRe />}
    </>
  );
};
