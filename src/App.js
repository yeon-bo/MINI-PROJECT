import "./styles.css";

import { Topbar } from "../Component/Topbar";
import { Search } from "../Component/Search";
import { InfoTab } from "../Component/InfoTab";
import { CardTitle } from "../Component/CardTitle";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />
      <InfoTab />
    </div>
  );
}
