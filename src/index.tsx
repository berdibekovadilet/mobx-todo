import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppContainer from "./components/app-container";

const $root = document.getElementById("root") as HTMLElement;

$root.className = "bg-light dark:bg-dark";

ReactDOM.createRoot($root).render(<AppContainer />);
