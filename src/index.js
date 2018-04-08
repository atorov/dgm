import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App/";

import "./style.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
