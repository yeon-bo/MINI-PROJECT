import styled from "@emotion/styled";

import { Comment } from "../Component/Comment.jsx";
import { Cardbar } from "../Component/Cardbar.jsx";

export const CardTitle = () => {
  const Post = styled.div`
    background-color: #2c2d32;
    margin-top: 0.75em;
  `;
  const PostTitle = styled.div`
    position: relative;
  `;
  const Title = styled.span`
    display: block;
    text-align: left;
    padding: 1em 2em 1em 1em;
    color: #fff;
    font-family: ProductSansBold;
    font-size: 1em;
    line-height: 1.3em;
  `;
  const AllowIcon = styled.img`
    position: absolute;
    width: 0.75em;
    top: 1.54em;
    right: 0.88em;
  `;
  return (
    <Post>
      <PostTitle>
        <Title>
          Metal Detectorist Discovers One of England’s Earliest Gold Coins in a
          Farm Field
        </Title>
        <AllowIcon src="./image/Allow.png" alt="Allow" />
      </PostTitle>
      <Comment />
      <Cardbar />
    </Post>
  );
};