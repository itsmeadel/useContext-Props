import React, { useContext } from "react";

import "./App.css";
import Jason from "./components/Jason";
import Mykol from "./components/Mykol";
import AriaLive from "./components/AriaLive";
import PersonContext from "./context/PersonContext";

function App() {
  const { retreatStatus } = useContext(PersonContext);
  return (
    <div className="App" role="main">
      <h1>Person Context App</h1>
      <h2>
        These are people. They are all individuals, but they have on thing in
        common, they won't go to a retreat unless their friends are going too.
      </h2>
      <Jason />
      <Mykol />
      {retreatStatus === "going" && <AriaLive />}
    </div>
  );
}

export default App;
