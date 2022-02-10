import "../src/styles.css";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Backallow } from "../Component/Backallow";
import { CommentsCom } from "../Component/CommentsCom";

export const Comments = () => {
  const [loading, setLoading] = useState(true);
  const [arrPosts, setArrPosts] = useState();
  const [posts, setPost] = useState([]);
  const fetchDataTop = async () => {
    await arrPosts[0].map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          posts[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (posts.length === arrPosts.length) {
            setLoading(false);
          }
        });
    });
  };
  // render={() =>console.log(location);}
  console.log("ㅎㅎ");
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
      {loading ? null : posts.map((post) => <CommentsCom kids={kids} />)}
    </div>
  );
};
