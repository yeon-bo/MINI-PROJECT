import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { TabCard } from "../Component/TabCard.jsx";

export const HomeTab = () => {
  const [loading, setLoading] = useState("nothing");
  const [arrPost, setArrPost] = useState([]);
  const [slicePost, setSlicePost] = useState([]);
  const [count, setCount] = useState(1);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const data = await response.json();
      setArrPost(data);
      setLoading("loding");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  window.addEventListener("scroll", (e) => {
    e.stopPropagation();
    let scrollLocation = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.scrollHeight;

    if (scrollLocation + windowHeight >= fullHeight) {
      console.log("끝");
      setCount(count + 1);
      console.log(count);
      console.log(arrPost);
    }
  });
  if (loading !== "nothing") {
    if (loading === "loding") {
      setSlicePost(arrPost.slice(0, 10));
      console.log(slicePost);
      setLoading("finish");
    }
  }
  console.log(loading);
  console.log(slicePost);
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
  return (
    <TabBox>
      <Tab>
        <TabTitle>Top</TabTitle>
        <TabTitle>New</TabTitle>
        <TabTitle>Ask</TabTitle>
        <TabTitle>Show</TabTitle>
      </Tab>
      {loading === "finish" ? null : (
        <TabCard arrPost={slicePost} count={count} />
      )}
    </TabBox>
  );
};
