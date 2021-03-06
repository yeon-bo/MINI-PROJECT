import "../src/styles.css";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { Backallow } from "../Component/Backallow";
import { CommentsCom } from "../Component/CommentsCom";

export const Comments = () => {
  const [loading, setLoading] = useState(true);
  const [arrPosts, setArrPosts] = useState(
    location.pathname.split("/")[2].split(",")
  );
  const [posts, setPost] = useState([]);
  const fetchData = async () => {
    await arrPosts.map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          posts[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (posts.length === arrPosts.length) {
            setLoading(false);
          }
        });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // render={() =>console.log(location);}
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
      {loading
        ? null
        : posts.map((post) => (
            <CommentsCom
              by={post.by}
              text={post.text}
              kids={post.kids}
              time={post.time}
            />
          ))}
    </div>
  );
};
