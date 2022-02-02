import "../src/styles.css";

import { Backallow } from "../Component/Backallow";
import { User } from "../Component/User";
import { InfoTab } from "../Component/InfoTab";

export const UserInfo = () => {
  return (
    <div className="App">
      <Backallow />
      <User />
      <InfoTab />
    </div>
  );
};
