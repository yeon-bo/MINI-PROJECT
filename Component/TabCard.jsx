import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { CardTitle } from "../Component/CardTitle.jsx";

export const TabCard = (arrPost) => {
  const [loading, setLoading] = useState(true);
  const [arrPosts, setArrPosts] = useState([arrPost.arrPost]);
  const [posts, setPost] = useState([]);
  const url = () => {
    arrPosts[0].map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          posts[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (posts.length > 9) {
            setLoading(false);
            console.log(posts);
          }
        });
    });
  };
  useEffect(() => {
    url();
  }, []);

  const PostBox = styled.div``;
  return (
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
  );
};
