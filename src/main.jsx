import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// اتصال اپ به div با id="root" در index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
