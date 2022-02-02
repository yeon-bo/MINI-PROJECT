import "../src/styles.css";

import { Search } from "../Component/Search";
import { DailyNews } from "../Component/DailyNews";
import { HomeTab } from "../Component/HomeTab";

export const Home = () => {
  return (
    <div className="App">
      <Search />
      <DailyNews />
      <HomeTab />
    </div>
  );
};
