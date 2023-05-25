import * as React from "react";
import { render } from "react-dom";

import GraphContainer from "./containers/GraphContainer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <GraphContainer />
      <footer>
        <a href="https://twitter.com/KennyPirman">@KennyPirman</a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
