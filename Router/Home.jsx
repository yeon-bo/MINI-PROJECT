import "../src/styles.css";
import { useState, useEffect } from "react";

import { Search } from "../Component/Search";
import { DailyNews } from "../Component/DailyNews";
import { HomeTab } from "../Component/HomeTab";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [arrPostTop, setArrPostTop] = useState([]);
  const fetchData = async () => {
    try {
      const responseTop = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const dataTop = await responseTop.json();
      setArrPostTop(dataTop.slice(0, 10));
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
      <Search />
      {loading ? null : <DailyNews arrPost={arrPostTop} />}
      {loading ? null : <HomeTab arrPost={arrPostTop} />}
    </div>
  );
};
