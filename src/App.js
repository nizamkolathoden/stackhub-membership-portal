import React from "react";
import logo from "./Asset/stacked-files.png";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="hero">
        <div className="logo">
          <img className="logo_icon" src={logo} alt="logo" />
        </div>
        <div className="hero_text">StackHub MASC membership portal</div>
        <div className="hero_title">COMING SOON</div>
      </div>
      <div className="footer">
        <div className="social">
          <div className="instagram">
            <a href="https://www.instagram.com/stackhub_masc/">
              <FaInstagramSquare size="2em" />
              <span>stackhub_masc</span>
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/stackhubmasc">
              <FaGithubSquare size="2em" />
              <span>stackhubmasc</span>
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/stackhubmasc?s=11">
              <FaTwitterSquare size="2em" />
              <span>StackhubMASC</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
