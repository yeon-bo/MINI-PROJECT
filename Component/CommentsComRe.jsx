import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const CommentsComRe = ({ kids }) => {
  const [loading, setLoading] = useState(true);
  const [arrPosts, setArrPost] = useState(kids);
  const [posts, setPost] = useState([]);
  const fetchData = async () => {
    await arrPosts.map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          posts[index] = data;
          if (posts.length === arrPosts.length) {
            setLoading(false);
          }
        });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value * 1000);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "recent";
    if (betweenTime < 60) {
      return `${betweenTime} minutes ago`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour} hours ago`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay} days ago`;
    }

    return `${Math.floor(betweenTimeDay / 365)} years ago`;
  }

  const CommentCont = styled.div`
    box-sizing: border-box;
    border-top: 1px solid #38393d;
  `;
  const UserBar = styled.div`
    position: relative;
    margin: 1em 2.5em;
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
    letter-spacing: -0.02em;
  `;
  const UserText = styled.p`
    display: block;
    text-align: left;
    color: #cecfd4;
    font-family: Roboto;
    font-size: 1em;
    line-height: 1.3rem;
    margin: 1.1rem 1rem 1.1rem 2.5rem;
  `;
  return (
    <>
      {loading
        ? null
        : posts.map((post) => (
            <CommentCont>
              <UserBar>
                <Link
                  to={{
                    pathname: `/userinfo/${post.by}`
                  }}
                >
                  <UserName>{post.by}</UserName>
                </Link>
                <UserTime>{timeForToday(post.time)}</UserTime>
              </UserBar>
              <UserText
                dangerouslySetInnerHTML={{ __html: `${post.text}` }}
              ></UserText>
            </CommentCont>
          ))}
    </>
  );
};
