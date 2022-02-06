import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { TabCard } from "../Component/TabCard.jsx";

export const HomeTab = () => {
  const [loading, setLoading] = useState(true);
  const [arrPost, setArrPost] = useState([]);
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => res.json())
      .then((data) => setArrPost(data.slice(0, 10)));
    setLoading(false);
  }, []);
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
      {loading ? null : <TabCard arrPost={arrPost} />}
    </TabBox>
  );
};
