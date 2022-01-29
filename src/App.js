import "./styles.css";

import { Topbar } from "../Component/Topbar";
import { Backallow } from "../Component/Backallow";
import { User } from "../Component/User";
import { DetailText } from "../Component/DetailText";
import { DetailBtn } from "../Component/DetailBtn";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Backallow />
    </div>
  );
}
