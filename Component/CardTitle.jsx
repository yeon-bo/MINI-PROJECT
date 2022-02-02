import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
  `;
  return (
    <Link to="/detail" style={{ textDecoration: "none" }}>
      <Post>
        <PostTitle>
          <Title>
            Metal Detectorist Discovers One of England’s Earliest Gold Coins in
            a Farm Field
          </Title>
          <AllowIcon src="./image/Allow.png" alt="Allow" />
        </PostTitle>
        <Comment />
        <Cardbar />
      </Post>
    </Link>
  );
};
