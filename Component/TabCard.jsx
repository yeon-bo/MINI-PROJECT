import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { CardTitle } from "../Component/CardTitle.jsx";

export const TabCard = ({ arrPost, count }) => {
  const [loading, setLoading] = useState(true);
  const [arrPosts, setArrPosts] = useState([arrPost]);
  const [posts, setPost] = useState([]);
  const fetchData = () => {
    arrPosts[0].map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          posts[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (posts.length >= count * 10) {
            setLoading(false);
            // console.log(posts);
          }
        });
    });
  };
  console.log(posts);
  useEffect(() => {
    fetchData();
  }, []);

  const PostBoxCont = styled.div`
    position: relative;
    display: flex;
  `;
  const PostBox = styled.div`
    float: left;
    + div {
      margin-left: 2.5em;
    }
  `;
  return (
    <PostBoxCont>
      <PostBox>
        {loading
          ? null
          : posts.map((post) => (
              <CardTitle
                title={post.title}
                karma={post.score}
                comment={post.CommentsLength}
                url={post.url}
              />
            ))}
      </PostBox>
      <PostBox>
        {loading
          ? null
          : posts.map((post) => (
              <CardTitle
                title={post.title}
                karma={post.score}
                comment={post.CommentsLength}
                url={post.url}
              />
            ))}
      </PostBox>
      <PostBox>
        {loading
          ? null
          : posts.map((post) => (
              <CardTitle
                title={post.title}
                karma={post.score}
                comment={post.CommentsLength}
                url={post.url}
              />
            ))}
      </PostBox>
      <PostBox>
        {loading
          ? null
          : posts.map((post) => (
              <CardTitle
                title={post.title}
                karma={post.score}
                comment={post.CommentsLength}
                url={post.url}
              />
            ))}
      </PostBox>
    </PostBoxCont>
  );
};
