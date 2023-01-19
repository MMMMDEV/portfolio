import React from "react";
import "./normalize.css";
import "./app.css";
import Icon from "@mdi/react";
import { mdiInstagram, mdiBriefcaseVariant } from "@mdi/js";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<ThankYou />} />
      </Routes>
      <footer className="footer">
        <div className="social-media-icons">
          <a href="https://www.instagram.com/blank190190/">
            <Icon
              title="instagram icon"
              className="social-icons"
              path={mdiInstagram}
              color="#9a7032"
            ></Icon>
          </a>
          <a href="https://www.upwork.com/freelancers/~01d52d4c557ea936d7?viewMode=1">
            <Icon
              title="upwork icon"
              className="social-icons"
              path={mdiBriefcaseVariant}
              color="#9a7032"
            ></Icon>
          </a>
        </div>
        <p className="copyright">© 2023 Mario Duran</p>
      </footer>
    </div>
  );
}

export default App;
