import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "../Router/Home";
import { About } from "../Router/About";
import { Comments } from "../Router/Comments";
import { Detail } from "../Router/Detail";
import { UserInfo } from "../Router/UserInfo";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comments/:id" element={<Comments />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/userinfo/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
}
