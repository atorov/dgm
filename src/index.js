import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import * as lib from "./lib/";

import App from "./components/App/";

import "./style.css";

ReactDOM.render(
    <App lib={lib} />,
    document.getElementById("root"),
);
registerServiceWorker();
