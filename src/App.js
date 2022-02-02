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
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </div>
  );
}
