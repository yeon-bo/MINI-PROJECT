import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Comment } from "../Component/Comment.jsx";
import { Cardbar } from "../Component/Cardbar.jsx";

export const CardTitle = ({ title, id, karma, comment, url, kids }) => {
  const [showComment, setShowComment] = useState(false);
  const Post = styled.div`
    background-color: #2c2d32;
    margin-top: 0.75em;
    width: 20em;
  `;
  const PostTitle = styled.div`
    position: relative;
  `;
  const Title = styled.span`
    display: block;
    text-align: left;
    padding: 1rem 2rem 1rem 1rem;
    color: #fff;
    font-family: ProductSansBold;
    font-size: 1em;
    line-height: 1.3rem;
  `;
  const AllowIcon = styled.img`
    position: absolute;
    width: 0.75em;
    top: 1.54em;
    right: 0.88em;
    transform: rotate(${showComment && "180deg"});
  `;
  const onClick = () => {
    setShowComment(!showComment);
  };
  return (
    <Post>
      <PostTitle>
        <Link to="/detail" style={{ textDecoration: "none" }}>
          <Title>{title}</Title>
        </Link>
        <AllowIcon src="./image/Allow.png" alt="Allow" onClick={onClick} />
      </PostTitle>
      {showComment && <Comment kids={kids} />}
      <Cardbar karma={karma} comment={comment} url={url} kids={kids} id={id} />
    </Post>
  );
};
