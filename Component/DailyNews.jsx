import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { Newscard } from "../Component/Newscard.jsx";

export const DailyNews = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const getPost = async () => {
    const json = await (
      await fetch(
        "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
      )
    ).json();
    setPost(json);
    setLoading(false);
  };
  useEffect(() => {
    getPost();
  }, []);
  const Title = styled.h3`
    font-family: ProductSansBold;
    font-size: 1.75em;
    line-height: 2.12rem;
    color: #fff;
    margin: 1.15rem 1.25rem 1.4rem;
    text-align: left;
  `;
  const Card_cont = styled.div`
    position: relative;
    height: 16.94em;
    margin: 0.25em 0 1.75em 1.25em;
  `;
  const Cards = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
  `;
  return (
    <>
      <Title>Daily News</Title>
      <Card_cont>
        <Cards>
          <Newscard
            title={post.title}
            by={post.by}
            karma={post.score}
            // comment={post.kids.length}
            url={post.url}
          />
          <Newscard />
        </Cards>
      </Card_cont>
    </>
  );
};
