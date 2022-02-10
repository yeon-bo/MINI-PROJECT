import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Comment = ({ kids }) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [text, setText] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${kids[0]}.json`
      );
      const data = await response.json();
      setPost(data);
      setText(data.text);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Comment = styled.div`
    border-top: 1px solid #38393d;
    padding: 1em;
    box-sizing: border-box;
  `;
  const UserCont = styled.div`
    display: flex;
    height: 1.5em;
    align-items: center;
    justify-content: start;
    margin-bottom: 0.25em;
  `;
  const UserName = styled.span`
    color: #ff3e00;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    margin-right: 0.5rem;
    text-decoration: underline;
    letter-spacing: -0.02em;
  `;
  const UserTime = styled.span`
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    letter-spacing: -0.02em;
  `;
  const CommentText = styled.p`
    display: -webkit-box;
    text-align: left;
    align-items: center;
    justify-content: start;
    text-overflow: ellipsis;
    width: 18rem;
    height: 4rem;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: #838489;
    font-family: Roboto;
    font-size: 0.75em;
    line-height: 1rem;
  `;
  return (
    <Comment>
      <UserCont>
        <Link to="/userinfo">
          <UserName user={post.id}>{post.by}</UserName>
        </Link>
        <UserTime>11 minutes ago</UserTime>
      </UserCont>
      {loading ? null : (
        <CommentText dangerouslySetInnerHTML={{ __html: text }}></CommentText>
      )}
    </Comment>
  );
};
