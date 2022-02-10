import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { CardTitle } from "../Component/CardTitle.jsx";

export const TabCard = ({
  arrPostTop,
  arrPostNew,
  arrPostAsk,
  arrPostShow,
  count,
  widthPost
}) => {
  const [loadingTop, setLoadingTop] = useState(true);
  const [loadingNew, setLoadingNew] = useState(true);
  const [loadingAsk, setLoadingAsk] = useState(true);
  const [loadingShow, setLoadingShow] = useState(true);
  const [arrPostsTop, setArrPostsTop] = useState([arrPostTop]);
  const [arrPostsNew, setArrPostsNew] = useState([arrPostNew]);
  const [arrPostsAsk, setArrPostsAsk] = useState([arrPostAsk]);
  const [arrPostsShow, setArrPostsShow] = useState([arrPostShow]);
  const [postsTop, setPostTop] = useState([]);
  const [postsNew, setPostNew] = useState([]);
  const [postsAsk, setPostAsk] = useState([]);
  const [postsShow, setPostShow] = useState([]);
  const fetchDataTop = async () => {
    await arrPostsTop[0].map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          postsTop[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (data.url != undefined)
            data.urlTitle = data.url.split("//")[1].split("/")[0];
          else data.urlTitle = "not to exist";
          if (postsTop.length >= count * 10) {
            setLoadingTop(false);
            // console.log(posts);
          }
        });
    });
  };
  const fetchDataNew = async () => {
    await arrPostsNew[0].map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          postsNew[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (data.url != undefined)
            data.urlTitle = data.url.split("//")[1].split("/")[0];
          if (postsNew.length >= count * 10) {
            setLoadingNew(false);
          }
        });
    });
  };
  const fetchDataAsk = async () => {
    await arrPostsAsk[0].map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          postsAsk[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (data.url != undefined)
            data.urlTitle = data.url.split("//")[1].split("/")[0];
          if (postsAsk.length >= count * 10) {
            setLoadingAsk(false);
          }
        });
    });
  };
  const fetchDataShow = async () => {
    await arrPostsShow[0].map((post, index) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        .then((response) => response.json())
        .then((data) => {
          postsShow[index] = data;
          if (data.kids != undefined) data.CommentsLength = data.kids.length;
          else data.CommentsLength = 0;
          if (data.url != undefined)
            data.urlTitle = data.url.split("//")[1].split("/")[0];
          if (postsShow.length >= count * 10) {
            setLoadingShow(false);
          }
        });
    });
  };
  useEffect(() => {
    fetchDataTop();
    fetchDataNew();
    fetchDataAsk();
    fetchDataShow();
  }, []);

  const PostBoxCont = styled.div`
    position: relative;
    display: flex;
    left: -${widthPost}em;
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
        {loadingTop
          ? null
          : postsTop.map((post) => (
              <CardTitle
                title={post.title}
                id={post.id}
                karma={post.score}
                comment={post.CommentsLength}
                url={post.url}
                urlTitle={post.urlTitle}
                kids={post.kids}
              />
            ))}
      </PostBox>
      <PostBox>
        {loadingNew
          ? null
          : postsNew.map((post) => (
              <CardTitle
                title={post.title}
                id={post.id}
                karma={post.score}
                comment={post.CommentsLength}
                url={post.url}
                urlTitle={post.urlTitle}
                kids={post.kids}
              />
            ))}
      </PostBox>
      <PostBox>
        {loadingAsk
          ? null
          : postsAsk.map((post) => (
              <CardTitle
                title={post.title}
                id={post.id}
                karma={post.score}
                comment={post.CommentsLength}
                url={post.url}
                kids={post.kids}
              />
            ))}
      </PostBox>
      <PostBox>
        {loadingShow
          ? null
          : postsShow.map((post) => (
              <CardTitle
                title={post.title}
                id={post.id}
                karma={post.score}
                comment={post.CommentsLength}
                url={post.url}
                urlTitle={post.urlTitle}
                kids={post.kids}
              />
            ))}
      </PostBox>
    </PostBoxCont>
  );
};
