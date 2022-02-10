import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { Newscard } from "../Component/Newscard.jsx";

export const DailyNews = ({ arrPost }) => {
  const [loading, setLoading] = useState(true);
  const [arrPostsTop, setArrPostsTop] = useState([arrPost]);
  const [postsTop, setPostTop] = useState([]);
  const fetchData = async () => {
    await arrPostsTop[0].map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          postsTop[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (data.url != undefined)
            data.urlTitle = data.url.split("//")[1].split("/")[0];
          else data.urlTitle = "not to exist";
          if (postsTop.length >= 10) {
            setLoading(false);
          }
        });
    });
  };
  useEffect(() => {
    fetchData();
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
          {loading
            ? null
            : postsTop.map((post) => (
                <Newscard
                  title={post.title}
                  id={post.id}
                  by={post.by}
                  time={post.time}
                  karma={post.score}
                  comment={post.CommentsLength}
                  url={post.url}
                  urlTitle={post.urlTitle}
                  kids={post.kids}
                />
              ))}
        </Cards>
      </Card_cont>
    </>
  );
};
