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
      setArrPost(data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // window.addEventListener("scroll", (e) => {
  //   let scrollLocation = document.documentElement.scrollTop;
  //   let windowHeight = window.innerHeight;
  //   let fullHeight = document.body.scrollHeight;

  //   if (scrollLocation + windowHeight >= fullHeight) {
  //     console.log("끝");
  //     setCount(count + 1);
  //     console.log(count);
  //     console.log(arrPost);
  //   }
  // });
  // if (loading !== "nothing") {
  //   if (loading === "loding") {
  //     setSlicePost(arrPost.slice(0, 10));
  //     console.log(slicePost);
  //     setLoading("finish");
  //   }
  // }
  // console.log(loading);
  // console.log(slicePost);
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
  const TabTitleLabel = styled.label`
    position: relative;
    display: flex;
    height: 100%;
    width: 25%;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid #2c2d32; */
    border: 1px solid #ff3e00;
    border-bottom-color: ${(props) =>
      props.className ? "#FF3E00" : "#2c2d32"};
    box-sizing: border-box;
    color: ${(props) => (props.className ? "#FF3E00" : "#6b6c70")};
    font-family: ProductSansRegular;
    font-size: 1em;
  `;
  const TabTitleInput = styled.input`
    position: absolute;
    opacity: 0;
  `;
  const onChange = (e) => {
    console.log("click");
    console.log(e.target.value);
  };
  return (
    <TabBox>
      <Tab>
        <TabTitleLabel htmlFor="Top">
          <TabTitleInput type="radio" id="Top" value="Top" onClick={onChange} />
          Top
        </TabTitleLabel>
        <TabTitleLabel htmlFor="New">
          <TabTitleInput type="radio" id="New" value="New" onClick={onChange} />
          New
        </TabTitleLabel>
        <TabTitleLabel htmlFor="Ask">
          <TabTitleInput type="radio" id="Ask" value="Ask" onClick={onChange} />
          Ask
        </TabTitleLabel>
        <TabTitleLabel htmlFor="Show">
          <TabTitleInput
            type="radio"
            id="Show"
            value="Show"
            onClick={onChange}
          />
          Show
        </TabTitleLabel>
      </Tab>
      {loading ? null : <TabCard arrPost={arrPost} count={count} />}
    </TabBox>
  );
};
