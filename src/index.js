import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MobileApp from './MobileApp';
const AppSwitcher = () => (
  window.innerWidth < 768 ? <MobileApp /> : <App />
);
ReactDOM.render(<AppSwitcher />, document.getElementById("root"));
