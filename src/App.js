import "./styles.css";

import { Search } from "../Component/Search";
import { Topbar } from "../Component/Topbar";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Search />
    </div>
  );
}
