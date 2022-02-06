import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { CardTitle } from "../Component/CardTitle.jsx";

export const TabCard = (arrPost) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${posts}.json`)
      .then((response) => response.json())
      .then((data) => setPost(data));
    setLoading(false);
  }, []);
  //   fetch(`https://hacker-news.firebaseio.com/v0/item/${arrPost.arrPost}.json`)
  //     .then((response) => response.json())
  //     .then((data) => setPost(data));
  //   setLoading(false);
  // }, []);
  console.log(arrPost.arrPost);
  console.log(posts);

  const PostBox = styled.div``;
  return (
    <PostBox>
      {/* {loading ? null : (posts.map((post) => ( */}
      <CardTitle
        title={posts.title}
        karma={posts.score}
        comment={posts.kids}
        url={posts.url}
      />
      {/* )))} */}
    </PostBox>
  );
};
