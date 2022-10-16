import "global.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import "reflect-metadata";
import { App } from "./core/presentation/App/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
