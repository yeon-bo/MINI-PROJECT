import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { CardTitle } from "../Component/CardTitle.jsx";

export const TabCard = (arrPost) => {
  const [loading, setLoading] = useState(true);
  const [arrPosts, setArrPosts] = useState([arrPost.arrPost]);
  const [posts, setPost] = useState([]);
  const url = () => {
    arrPosts.map((post) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post[0]}.json`)
        .then((response) => response.json())
        .then((data) => setPost([...posts, data]));
      setLoading(false);
    });
  };
  useEffect(() => {
    url();
  }, []);
  console.log(arrPosts);
  console.log(posts);

  const PostBox = styled.div``;
  return (
    <PostBox>
      {loading ? (
        <h4>loading</h4>
      ) : (
        posts.map((post) => (
          <CardTitle
            title={post.title}
            karma={post.score}
            comment={post.kids}
            url={post.url}
          />
        ))
      )}
    </PostBox>
  );
};
