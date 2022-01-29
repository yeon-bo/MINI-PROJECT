import "./styles.css";

import { Topbar } from "../Component/Topbar";
import { Backallow } from "../Component/Backallow";
import { Comments } from "../Component/Comments";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Backallow />
      <Comments />
    </div>
  );
}
