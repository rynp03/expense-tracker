import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="0a943835-56d4-4c8c-9253-5d02765ba0a2" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
