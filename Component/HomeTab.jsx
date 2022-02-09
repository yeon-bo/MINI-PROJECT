import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { TabCard } from "../Component/TabCard.jsx";

export const HomeTab = () => {
  const [loading, setLoading] = useState(true);
  const [arrPostTop, setArrPostTop] = useState([]);
  const [arrPostNew, setArrPostNew] = useState([]);
  const [arrPostAsk, setArrPostAsk] = useState([]);
  const [arrPostShow, setArrPostShow] = useState([]);
  const [slicePost, setSlicePost] = useState([]);
  const [on, setOn] = useState(true);
  const [widthPost, setWidthPost] = useState("0");
  const [count, setCount] = useState(1);
  const fetchData = async () => {
    try {
      const responseTop = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const dataTop = await responseTop.json();
      setArrPostTop(dataTop.slice(0, 10));

      const responseNew = await fetch(
        "https://hacker-news.firebaseio.com/v0/newstories.json"
      );
      const dataNew = await responseNew.json();
      setArrPostNew(dataNew.slice(0, 10));

      const responseAsk = await fetch(
        "https://hacker-news.firebaseio.com/v0/askstories.json"
      );
      const dataAsk = await responseAsk.json();
      setArrPostAsk(dataAsk.slice(0, 10));

      const responseShow = await fetch(
        "https://hacker-news.firebaseio.com/v0/showstories.json"
      );
      const dataShow = await responseShow.json();
      setArrPostShow(dataShow.slice(0, 10));

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
    border-bottom: 1px solid #2c2d32;
    border-bottom-color: ${(props) => (props.value ? "#FF3E00" : "#2c2d32")};
    box-sizing: border-box;
    color: ${(props) => (props.value ? "#FF3E00" : "#6b6c70")};
    font-family: ProductSansRegular;
    font-size: 1em;
    :hover {
      border-bottom-color: #ff3e00;
      color: #ff3e00;
    }
  `;
  const TabTitleInput = styled.input`
    position: absolute;
    opacity: 0;
  `;
  const onChange = (e) => {
    console.log("click");
    console.log(e.target.value);
    setWidthPost(e.target.value);
  };
  return (
    <TabBox>
      <Tab>
        <TabTitleLabel htmlFor="Top" className={on} onClick={onChange}>
          <TabTitleInput type="radio" value="0" id="Top" />
          Top
        </TabTitleLabel>
        <TabTitleLabel htmlFor="New" className={!on} onClick={onChange}>
          <TabTitleInput type="radio" value="22.5" id="New" />
          New
        </TabTitleLabel>
        <TabTitleLabel htmlFor="Ask" className={on} onClick={onChange}>
          <TabTitleInput type="radio" value="45" id="Ask" />
          Ask
        </TabTitleLabel>
        <TabTitleLabel htmlFor="Show" className={!on} onClick={onChange}>
          <TabTitleInput type="radio" value="67.5" id="Show" />
          Show
        </TabTitleLabel>
      </Tab>
      {loading ? null : (
        <TabCard
          arrPostTop={arrPostTop}
          arrPostNew={arrPostNew}
          arrPostAsk={arrPostAsk}
          arrPostShow={arrPostShow}
          count={count}
          widthPost={widthPost}
        />
      )}
    </TabBox>
  );
};
