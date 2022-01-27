import "./styles.css";

import { Topbar } from "../Component/Topbar";
import { Search } from "../Component/Search";
import { DailyNews } from "../Component/DailyNews";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />
      <DailyNews />
    </div>
  );
}
