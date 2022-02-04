import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { CardTitle } from "../Component/CardTitle.jsx";

export const HomeTab = () => {
  const [loading, setLoading] = useState(true);
  const [arrPost, setArrPost] = useState([]);
  const [posts, setPost] = useState([]);

  const url = arrPost
    .slice(0, 9)
    .map((Post) => `https://hacker-news.firebaseio.com/v0/item/${Post}.json`);
  const getArr = async () => {
    const json = await (
      await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    ).json();
    setArrPost(json);
  };
  useEffect(() => {
    getArr();
  }, []);
  const getPost = async () => {
    const json = await (await fetch(url[0])).json();
    setPost(json);
    setLoading(false);
  };
  useEffect(() => {
    getPost();
  }, []);

  console.log(posts);

  const TabBox = styled.div`
    display: inline-block;
    width: 20em;
    margin: 0 auto;
  `;
  const Tab = styled.div`
    height: 2.3em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const TabTitle = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #2c2d32;
    box-sizing: border-box;
    color: #6b6c70;
    font-family: ProductSansRegular;
    font-size: 1em;
  `;
  const PostBox = styled.div``;
  return (
    <TabBox>
      <Tab>
        <TabTitle>Top</TabTitle>
        <TabTitle>New</TabTitle>
        <TabTitle>Ask</TabTitle>
        <TabTitle>Show</TabTitle>
      </Tab>
      <PostBox>
        {/* {loading ? (<h3>Loding</h3>) : (posts.map((post) => ( */}
        <CardTitle
          title={posts.title}
          karma={posts.score}
          comment={posts.kids}
          url={posts.url}
        />
        {/* )))} */}
      </PostBox>
    </TabBox>
  );
};
