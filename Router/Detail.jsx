import "../src/styles.css";
import { useState, useEffect } from "react";

import { Backallow } from "../Component/Backallow";
import { User } from "../Component/User";
import { DetailText } from "../Component/DetailText";
import { DetailBtn } from "../Component/DetailBtn";

export const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [arrPosts, setArrPosts] = useState(location.pathname.split("/")[2]);
  const [posts, setPost] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${arrPosts}.json`
      );
      const data = await response.json();
      setPost(data);
      if (data.kids != undefined) data.kidsLength = data.kids.length;
      else data.CommentsLength = 0;

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Backallow />
      <User id={posts.by} time={posts.time} karma={posts.score} />
      <DetailText title={posts.title} text={posts.text} />
      {loading ? null : (
        <DetailBtn
          kids={posts.kids}
          kidsLength={posts.kidsLength}
          url={posts.url}
        />
      )}
    </div>
  );
};
