import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Postform />
        <hr />
        <Posts />
      </header>
    </div>
  );
}

export default App;
