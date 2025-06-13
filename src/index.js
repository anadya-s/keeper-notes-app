import React from "react";
import ReactDOM from "react-dom/client"; // 👈 this is new
import App from "./components/App";
import "./../public/styles.css";

// 👇 new way in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
