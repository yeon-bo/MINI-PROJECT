import "./styles.css";

import { Topbar } from "../Component/Topbar";
import { Search } from "../Component/Search";
import { SearchTag } from "../Component/SearchTag";
import { CardTitle } from "../Component/CardTitle";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />
      <SearchTag />
      <CardTitle />
    </div>
  );
}
