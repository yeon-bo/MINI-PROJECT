import "../src/styles.css";

import { Link } from "react-router-dom";
import { Backallow } from "../Component/Backallow";
import { User } from "../Component/User";
import { DetailText } from "../Component/DetailText";
import { DetailBtn } from "../Component/DetailBtn";

export const Detail = () => {
  return (
    <div className="App">
      <Backallow />
      <User />
      <DetailText />
      <DetailBtn />
    </div>
  );
};
