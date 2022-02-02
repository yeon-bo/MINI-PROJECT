import "../src/styles.css";

import { Link } from "react-router-dom";
import { Backallow } from "../Component/Backallow";
import { AboutLink } from "../Component/AboutLink";

export const About = () => {
  return (
    <div className="App">
      <Backallow />
      <AboutLink />
    </div>
  );
};
