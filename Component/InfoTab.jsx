import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { CardTitle } from "../Component/CardTitle.jsx";

export const InfoTab = ({ submitted, about }) => {
  const [arrPosts, setArrPosts] = useState([submitted]);
  const [on, setOn] = useState("0");
  const [widthPost, setWidthPost] = useState("0");
  const Intro = styled.span`
    display: inline-block;
    color: #cecfd4;
    width: 20rem;
    font-family: ProductSansRegular;
    font-size: 0.81em;
    line-height: 1rem;
    text-align: left;
    margin: 1.5rem 1.25rem 2rem;
    overflow: hidden;
  `;
  const TabBox = styled.div`
    display: absolute;
    width: 20em;
    margin: 0 auto;
  `;
  const Tab = styled.div`
    height: 1.63em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const TabTitleLabel = styled.label`
    width: 33.33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #2c2d32;
    border-bottom-color: ${(props) =>
      props.value === on ? "#FF3E00" : "#2c2d32"};
    box-sizing: border-box;
    color: ${(props) => (props.value === on ? "#FF3E00" : "#6b6c70")};
    font-family: ProductSansBold;
    font-size: 0.75em;
    line-height: 0.91rem;
    cursor: pointer;
  `;
  const TabTitleInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
  `;
  const PostBox = styled.div``;
  const onChange = (e) => {
    setOn(e.target.value);
    setWidthPost(e.target.value);
  };
  return (
    <>
      <Intro>{about === undefined ? "-" : about}</Intro>
      <TabBox>
        <Tab>
          <TabTitleLabel htmlFor="Top" value="0" onClick={onChange}>
            <TabTitleInput type="radio" value="0" id="Top" />
            Submission
          </TabTitleLabel>
          <TabTitleLabel htmlFor="New" value="22.5" onClick={onChange}>
            <TabTitleInput type="radio" value="22.5" id="New" />
            Comments
          </TabTitleLabel>
          <TabTitleLabel htmlFor="Ask" value="45" onClick={onChange}>
            <TabTitleInput type="radio" value="45" id="Ask" />
            Favorites
          </TabTitleLabel>
        </Tab>
        <PostBox>
          <CardTitle
            title={
              "Metal Detectorist Discovers One of England’s Earliest Gold Coins in a Farm Field"
            }
            karma={"1320"}
            comment={"10"}
            url={"url"}
            kids={[30290613]}
            urlTitle={"Giant Ant"}
          />
          <CardTitle
            title={
              "Metal Detectorist Discovers One of England’s Earliest Gold Coins in a Farm Field"
            }
            karma={"1320"}
            comment={"10"}
            url={"url"}
            kids={[30290613]}
            urlTitle={"Giant Ant"}
          />
        </PostBox>
      </TabBox>
    </>
  );
};
