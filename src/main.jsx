import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/__reset.styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>
);
