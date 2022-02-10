import "../src/styles.css";
import { useState, useEffect } from "react";

import { Backallow } from "../Component/Backallow";
import { User } from "../Component/User";
import { InfoTab } from "../Component/InfoTab";

export const UserInfo = () => {
  const [loading, setLoading] = useState(true);
  const [arrPosts, setArrPosts] = useState(location.pathname.split("/")[2]);
  const [posts, setPost] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${arrPosts}.json`
      );
      const data = await response.json();
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(posts)
  return (
    <div className="App">
      <Backallow />
      {loading ? null : (
        <User id={posts.id} karma={posts.karma} created={posts.created} />
      )}
      <InfoTab submitted={posts.submitted} />
    </div>
  );
};
